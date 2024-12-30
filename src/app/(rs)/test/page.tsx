"use client";
import React, { useEffect, useState } from "react";

const Test: React.FC = () => {
  const [customer, setCustomer] = useState(null);
  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/db/getCustomerById?id=1`
      );
      const data = await response.json();
      setCustomer(data);
    };
    fetchCustomer();
  }, []);
  return (
    <div>
      <h2>Test Page</h2>
      <div>
        <p>{JSON.stringify(customer)}</p>
      </div>
    </div>
  );
};

export default Test;
