import React, { useContext } from "react";
import { Table } from "reactstrap";
// import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { UpdateButton, DeleteButton } from "../actionButtons";
import { productsContext } from "../context/productsContext";

function ProductsList() {
    const { product } = useContext(productsContext);
    if (product.length === 0) {
        return (<h4 className="text-center">Sedang Load Data</h4>)
    } else {
        const productsKeys = Object.keys(product[0])
        console.log(productsKeys);
        productsKeys.splice(0, 1)
        return (
            <div className="container mt-3">
                <Table bordered striped responsive>
                    <thead>
                        <tr className="text-center bg-dark text-white">
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Jurusan</th>
                            <th>Jenis Kelamin</th>
                            <th>Beasiswa</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map(item => (
                            <tr>
                                <td>{item.nama}</td>
                                <td>{item.alamat}</td>
                                <td>{item.jurusan}</td>
                                <td>{item.jenkel}</td>
                                <td
                                    className={item.beasiswa ? "text-primary" : "text-danger"}
                                >
                                    {item.beasiswa ? "Mendapat Beasiswa" : "Tidak Beasiswa"}
                                </td>
                                <UpdateButton item={item} /> |
                                <DeleteButton id={item.id} />
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        )
    }
}

export default ProductsList;