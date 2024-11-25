import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const ProductsPanel = () => {

  const handleAddEvent = () => {

  }
  return (
    <div className="w-full h-full p-6 bg-midnight_green-100">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-mint-600 capitalize">manage products</h1>
        <button
          onClick={handleAddEvent}
          className="px-4 py-2 bg-mint-500 capitalize flex items-center gap-2 text-white rounded-md hover:bg-mint-500 hover:-translate-y-1 transition duration-200 shadow-md"
        >
          <FiPlusCircle />
          add new product
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row for demonstration */}
          <tr>
            <td>Product A</td>
            <td>12345</td>
            <td>$10</td>
            <td>1000</td>
            <td>
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500 ml-2">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Product A</td>
            <td>12345</td>
            <td>$10</td>
            <td>1000</td>
            <td>
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500 ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPanel