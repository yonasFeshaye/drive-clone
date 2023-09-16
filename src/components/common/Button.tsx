import { title } from "process";
import React from "react";

export default function Button({ btnClass, title, onClick }: Button) {
    return (
        <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
    )
}