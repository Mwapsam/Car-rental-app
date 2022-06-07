import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../store/car";

const CarsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCars())
    }, [dispatch])

    return (
        <div>
            <h1>Cars</h1>
        </div>
    )
}

export default CarsList