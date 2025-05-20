import './Header.css'
import logoCircle from '../img/logoHimatif.png'
import logoTes from '../img/arrowDown.png'
const Header = () => {
    return (
        <>
            <div className="header" >  
                <div className="titlee">
                    <p className='titleHead' data-aos="fade-right" >HIMATIF UMG</p>
                    <p className='text' style={{marginBottom: 10}} data-aos="fade-right" data-aos-delay="150">Selamat Datang di Website Resmi HIMATIF UMG.</p>
                    <p className='text' style={{marginBottom: 20}} data-aos="fade-right" data-aos-delay="250">Website ini menjadi pusat informasi, kegiatan, dan dokumentasi Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Gresik.
                    Dapatkan update terbaru, kenali setiap divisi, dan ikuti berbagai program menarik yang kami jalankan.</p>
                    <a href="#about" className='navLink active'>Tentang Kami <img src={logoTes} alt="" width={25} height={25} data-aos="fade-right" data-aos-delay="350"/></a>
                    
                </div>
                <img src={logoCircle} alt="" width={600} height={400} id='homeLogo' data-aos="fade-left"/>
                <div className="undertow" data-aos="fade-up" style={{opacity: 0.15}}></div>
            </div>
        </>
    );
}
 
export default Header;