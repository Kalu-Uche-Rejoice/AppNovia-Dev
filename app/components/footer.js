function Footer() {
    var time = new Date()
    var hour = time.getFullYear()
    return(
        <div>
            <div className="table uppercase border-t-2 border-b-2 border-black block w-screen">
                <div className="table-row">
                    <div className="table-cell p-5">
                        fast delivery
                    </div>
                    <div className="table-cell border-l-2 border-black p-5">
                        free returns
                    </div>
                    <div className="table-cell border-l-2 border-black p-5">
                        Secure Checkout
                    </div>
                    <div className="table-cell p-5 border-l-2 border-black">
                        order tracking
                    </div>  
                </div>
            </div>
            <div className="grid grid-cols-5 gap-12 p-5 m-10 border-b-2 border-black">
                <div className="text-wrap">
                    <img src="/images/corsen-main-logo-x2.png.png"></img>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            SUPPORT
                        </li>
                        <li>
                            Help & contact us
                        </li>
                        <li>
                            Return and Refunds
                        </li>
                        <li>
                            Online Stores
                        </li>
                        <li>
                            Privacy policy
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            COMPANY
                        </li>
                        <li className="bg-black">
                            Help & contact us
                        </li>
                        <li className="bg-black">
                            Return and Refunds
                        </li>
                        <li className="bg-black">
                            Online Stores
                        </li>
                        <li className="bg-black">
                            Privacy policy
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            LOCATIONS
                        </li>
                        <li>
                        Vienna, Hansalgasse, Austria
                        </li>
                        <li>
                        Berlin, Buschallee, Germany
                        </li>
                        <li>
                        The Piazza, London, UK
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Get the Latest news</h3>
                    <text className="border-b-2 border-black">Email address</text>
                </div>
            </div>
            <div>
                <footer className="float-left">&copy{hour} ALL RIGHTS RESERVED</footer>
                <div className="float-right">
                 <div className="table mt-4 w-1/2 mx-auto mb-2 text-xs">
                    <div className="table-row">
                        <div className="table-cell uppercase text-right border-r-4 border-black p-1">
                            eng
                        </div>
                        <div className="table-cell uppercase text-left p-1">
                            fra
                        </div>
                        <div className="table-cell uppercase text-left p-1">
                            skr
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer