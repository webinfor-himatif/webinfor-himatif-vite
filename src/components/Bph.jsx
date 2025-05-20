import './Bph.css'
import gambarKetum from '../img/bph/ket.jpg'
import gambarWaKetum from '../img/bph/wak.jpg'
import gambarSekSatu from '../img/bph/sek1.jpg'
import gambarSekDua from '../img/bph/sek2.jpg'
import gambarBenSatu from '../img/bph/ben1.jpg'
import gambarBenDua from '../img/bph/ben2.jpg'

const Bph = () => {
    return (
        <>
            <div className="Bph" id='divisi'>
                <p className='title'>Struktural .</p>
                <div className="card" data-aos="fade-up-right">
                        <img src={gambarKetum} alt="" width={300} height={"auto"} style={{gridArea: "img"}}/>
                        <div className="bphDesc">
                            <p className='deskripsiBold' data-aos="fade-up" data-aos-delay="125">Ketua Umum</p>
                            <p className="titleMedium" data-aos="fade-up" data-aos-delay="175">Fachrur Rozy</p>
                            <p className="deskripsiAbu" data-aos="fade-up" data-aos-delay="225">Periode 2024~2025</p>
                        </div>
                </div>

                <div className="card right" data-aos="fade-up-left">
                        <img src={gambarWaKetum} alt="" width={300} height={"auto"} style={{gridArea: "img"}}/>
                        <div className="bphDesc">
                            <p className='deskripsiBold' data-aos="fade-up" data-aos-delay="125">Wakil Ketua Umum</p>
                            <p className="titleMedium" data-aos="fade-up" data-aos-delay="175">M Wildan Zahir</p>
                            <p className="deskripsiAbu" data-aos="fade-up" data-aos-delay="225">Periode 2024~2025</p>
                        </div>
                </div>

                <div className="card" data-aos="fade-up-right">
                        <img src={gambarSekSatu} alt="" width={300} height={"auto"} style={{gridArea: "img"}}/>
                        <div className="bphDesc">
                            <p className='deskripsiBold' data-aos="fade-up" data-aos-delay="125">Sekretaris</p>
                            <p className="titleMedium" data-aos="fade-up" data-aos-delay="175">Rista Ifanka</p>
                            <p className="deskripsiAbu" data-aos="fade-up" data-aos-delay="225">Periode 2024~2025</p>
                        </div>
                </div>

                <div className="card right" data-aos="fade-up-left">
                        <img src={gambarSekDua} alt="" width={300} height={"auto"} style={{gridArea: "img"}}/>
                        <div className="bphDesc">
                            <p className='deskripsiBold' data-aos="fade-up" data-aos-delay="125">Sekretaris</p>
                            <p className="titleMedium" data-aos="fade-up" data-aos-delay="175">Mbak Putri</p>
                            <p className="deskripsiAbu" data-aos="fade-up" data-aos-delay="225">Periode 2024~2025</p>
                        </div>
                </div>
                <div className="card" data-aos="fade-up-right">
                        <img src={gambarBenSatu} alt="" width={300} height={"auto"} style={{gridArea: "img"}}/>
                        <div className="bphDesc">
                            <p className='deskripsiBold' data-aos="fade-up" data-aos-delay="125">Bendahara</p>
                            <p className="titleMedium" data-aos="fade-up" data-aos-delay="175">Wong Dukun</p>
                            <p className="deskripsiAbu" data-aos="fade-up" data-aos-delay="225"> Periode 2024~2025</p>
                        </div>
                </div>
                <div className="card right" data-aos="fade-up-left">
                        <img src={gambarBenDua} alt="" width={300} height={"auto"} style={{gridArea: "img"}}/>
                        <div className="bphDesc">
                            <p className='deskripsiBold' data-aos="fade-up" data-aos-delay="125">Bendahara</p>
                            <p className="titleMedium" data-aos="fade-up"  data-aos-delay="175">Mbak Melin</p>
                            <p className="deskripsiAbu" data-aos="fade-up" data-aos-delay="225">Periode 2024~2025</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Bph;