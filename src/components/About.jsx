import './About.css';
import logoText from '../img/himatiflogo.png'
const About = () => {
    return ( 
        <>
            <div className="about" id='about'>
                <div className="box" data-aos="fade-up">
                    <img src={logoText} alt=""  style={{width: 300, height: 300, gridArea: 'img'}} />
                    <p className="title fw" data-aos="fade-up" data-aos-delay="150">Apa itu himatif?</p>
                    <p className="text" data-aos="fade-up" data-aos-delay="100">HIMATIF adalah Himpunan Mahasiswa Teknik Informatika yang memadahi kegiatan mahasiswa jurusan Teknik Informatika Universitas Muhammadiyah Gresik</p>
                </div>
                <div className="list">
                    <ul>
                        <li><p className='title' data-aos="fade-right">Visi</p></li>
                        <li><p className='text'data-aos="fade-right" data-aos-delay="150">aaLorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus minima, cupiditate voluptate beatae?</p></li>
                    </ul>
                    <ol style={{listStyleType: 'disc'}}>
                        <li><p className='title' data-aos="fade-right" data-aos-delay="100">Misi</p></li>
                        <li><p className='text' data-aos="fade-right" data-aos-delay="100">1. aaLorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus minima, cupiditate voluptate beatae?</p></li>
                        <li><p className='text' data-aos="fade-right" data-aos-delay="100">2. aaLorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus beatae?</p></li>
                        <li><p className='text' data-aos="fade-right" data-aos-delay="100">3. aaLorem ipsum dolor sit, amet consectetur adipisicing elit. Invcupiditate voluptate beatae?</p></li>
                        <li><p className='text' data-aos="fade-right" data-aos-delay="100">4. aaLorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus minima, cupiditate voluptate beatae?</p></li>
                        <li><p className='text' data-aos="fade-right" data-aos-delay="100">5. aaLorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus minima, cupiditate voluptate beatae?</p></li>
                    </ol>
                </div>
            </div>
        </>
     );
}
 
export default About;