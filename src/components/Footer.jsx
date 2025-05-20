import './Footer.css'
const Footer = () => {
    return ( 
        <>
            <div className="footer" id='footer'>
                <div className="top">
                    <div className="leftBoxContainer">
                        <a href="https://www.instagram.com/himatif_umg?igsh=MXRzcWoxODhzNXVyaw== " className="waBox"></a>
                    </div>
                    <div className="rightBoxContainer">
                        <p className="title">SOCIAL MEDIA.</p>
                        <p className="text">Wether it's for our next project or just saying hi! we would like to hear it from you!</p>
                    </div>
                </div>
                <div className="middle">
                    <ul>
                        <li><p className='title'>HIMATIF - UMG</p></li>
                        <li><p className='text' style={{fontWeight: 'bold'}}>Contact Person</p></li>
                        <li><p className='text trans'>Rista ~ Sekretaris 1 - 08123456789</p></li>
                        <li><p className='text trans'>Melin ~ Sekretaris 2 - 07765432102</p></li>   
                    </ul>
                    <ul>
                        <li><p className='title'>Alamat</p></li>
                        <li><p className='text' style={{fontWeight: 'bold'}}>Universitas Muhammadiyah Gresik</p></li>
                        <li><p className='text trans'>GEDUNG I F1.01</p></li>
                        <li><p className='text trans'>Jl. Sumatera No.101, Gn. Malang, Randuagung, Kec. Kebomas, Kabupaten Gresik, Jawa Timur 61121</p></li>
                    </ul>
                </div>
                <div className="bottom">
                    <p>©Hak Cipta 2024 HIMATIF UMG</p>
                </div>
            </div>
        </>
     );
}
 
export default Footer;