// src/features/order/UpdateOrder.jsx
import React from 'react';
import Button from '../../Ui/Button';
import { useFetcher } from 'react-router-dom';

// Action to handle the PATCH request
export const action = async ({ request, params }) => {
  const formData = await request.formData();

  // Here, you can handle the data and update the order priority.
  const response = await fetch(`/api/orders/${params.orderId}/priority`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ priority: true }),  // assuming you're updating priority
  });

  if (!response.ok) {
    throw new Error('Failed to update the order priority');
  }

  return { success: true };
};

// Component
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}
