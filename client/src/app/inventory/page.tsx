"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 120,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 120,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating.toFixed(1) : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Quantity",
    width: 120,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      ></DataGrid>
    </div>
  );
};

export default Inventory;
