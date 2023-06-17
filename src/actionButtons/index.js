import React, { useContext, useState } from "react";
import { productsContext } from "../context/productsContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export function AddButton() {
    const { add } = useContext(productsContext)

    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({
        nama: "",
        alamat: "",
        jurusan: "",
        jenkel: "",
        beasiswa: "",
    });

    function addProduct() {
        if (!product.nama || !product.alamat || !product.jurusan || !product.jenkel) {
            console.log("Data Gagal Dikirim");
            alert('Pastikan Semua Kolom Terisi, Kecuali Beasiswa')
        }
        else {
            add(product)
            setProduct({
                nama: "",
                alamat: "",
                jurusan: "",
                jenkel: "",
                beasiswa: "",
            })
            openCloseModal();
        }
    }

    function openCloseModal() {
        setModal(!modal)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({
            ...product, [name]: value
        });
    }

    return (
        // Add Data To Realtime Database
        <>
            <button onClick={openCloseModal}
                className="btn btn-warning">Tambah Data</button>

            <Modal isOpen={modal}>
                <ModalHeader>Tambah Data</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label className="form-label">Nama</label>
                        <input type="text" name="nama" className="form-control mb-3"
                            onChange={handleChange} />

                        <label className="form-label" >Alamat</label>
                        <input type="text" name="alamat" className="form-control mb-3" rows="2"
                            onChange={handleChange} />

                        <div className="mb-3">
                            <label htmlFor="jurusan" className="form-label">Jurusan</label>
                            <select name="jurusan" className="form-select" onChange={handleChange}>
                                <option value="Informatika">Informatika</option>
                                <option value="Bisnis Dan Ekonomi">Bisnis dan Ekonomi</option>
                                <option value="Komputer">Komputer</option>
                                <option value="Teknik Kapal">Teknik Kapal</option>
                                <option value="Service Kulkas">Service Kulkas</option>
                            </select>
                        </div>

                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="L" name="jenkel" id="jenkelL" onChange={handleChange} />
                            <label htmlFor="jenkelL" className="form-check-label">Laki Laki</label>
                        </div>
                        <div className="form-check mb-3">
                            <input type="radio" className="form-check-input" value="P" name="jenkel" id="jenkelP" onChange={handleChange} />
                            <label htmlFor="jenkelP" className="form-check-label">Perempuan</label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" name="beasiswa" value="true" id="beasiswa" />
                            <label className="form-check-label" htmlFor="beasiswa">
                                Dapatkan Beasiswa
                            </label>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={addProduct} className="btn btn-primary">Submit</button>
                    <button onClick={openCloseModal}
                        className="btn btn-secondary">Cancel</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export function UpdateButton(item) {
    const { update } = useContext(productsContext);

    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({
        nama: item.item.nama,
        alamat: item.item.alamat,
        jurusan: item.item.jurusan,
        jenkel: item.item.jenkel,
        beasiswa: item.item.beasiswa
    });

    function updateProduct() {
        if (!product.nama || !product.alamat || !product.jurusan || !product.jenkel) {
            console.log("Data Gagal Dikirim");
            alert('Pastikan Semua Kolom Terisi, Kecuali Beasiswa')
        }
        else {
            update(product, item.item.id)
            openCloseModal();
        }
    }

    function openCloseModal() {
        setModal(!modal)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({
            ...product, [name]: value
        });
    }

    return (
        <>
            <button onClick={openCloseModal} className="btn btn-info">Edit</button>

            <Modal isOpen={modal}>
                <ModalHeader>Edit Data Siswa</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label className="form-label">Nama</label>
                        <input type="text" name="nama" className="form-control mb-3"
                            onChange={handleChange}
                            value={product.nama} />

                        <label className="form-label" >Alamat</label>
                        <input type="text" name="alamat" className="form-control mb-3" rows="2"
                            onChange={handleChange}
                            value={product.alamat} />

                        <div className="mb-3">
                            <label htmlFor="jurusan" className="form-label">Jurusan</label>
                            <select name="jurusan" className="form-select" onChange={handleChange}>
                                <option value="Informatika">Informatika</option>
                                <option value="Bisnis Dan Ekonomi">Bisnis dan Ekonomi</option>
                                <option value="Komputer">Komputer</option>
                                <option value="Teknik Kapal">Teknik Kapal</option>
                                <option value="Service Kulkas">Service Kulkas</option>
                            </select>
                        </div>

                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="L" name="jenkel" id="jenkelL" onChange={handleChange} checked={product.jenkel === 'L'} />
                            <label htmlFor="jenkelL" className="form-check-label">Laki Laki</label>
                        </div>
                        <div className="form-check mb-3">
                            <input type="radio" className="form-check-input" value="P" name="jenkel" id="jenkelP" onChange={handleChange} checked={product.jenkel === 'P'} />
                            <label htmlFor="jenkelP" className="form-check-label">Perempuan</label>
                        </div>

                        <input className="form-check-input" type="checkbox" name="beasiswa" onChange={handleChange} checked={product.beasiswa} id="beasiswa" />
                        <label className="form-check-label" htmlFor="beasiswa">
                            Dapatkan Beasiswa
                        </label>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={updateProduct} className="btn btn-primary">Edit Data</button>
                    <button onClick={openCloseModal}
                        className="btn btn-secondary">Cancel</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export function DeleteButton(id) {
    const { removeProduct } = useContext(productsContext);
    return (
        <button onClick={() => removeProduct(id)} className="btn btn-danger">Delete</button>
    )
}