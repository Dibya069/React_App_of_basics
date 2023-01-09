import React from 'react'

export default function Header() {
    return (
        <>
        <section className="container mb-5">
            <div className="shadow-lg mt-5 text-center">
                <h3>Hello there , Dibyajyoti Mohanty</h3>
            </div>
        </section>
        <section className="container row">
            <div className="col-6">
                <h2>Hello, I am very excited now</h2>
            </div>
            <div className="col-4 ml-auto">
                <button className="btn btn-outline-danger">Click Here</button>
            </div>
        </section>
        </>
    );
}
