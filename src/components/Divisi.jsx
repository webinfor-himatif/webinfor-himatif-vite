import './Divisi.css';

const Divisi = () => {
    return ( 
        <>
            <div className="divisi">
                <p className='title' data-aos="fade-right">Daftar Divisi .</p>
                <div className="listDivisi">
                    {/* Legacy */}
                    <a href="#humas" className='divisiImg humas' data-aos="fade-right" data-aos-delay="125"></a>
                    <a href="#litbang" className='divisiImg litbang' data-aos="fade-right" data-aos-delay="100"></a>
                    <a href="#kwu" className='divisiImg kwu' data-aos="fade-right" data-aos-delay="50"></a>
                    <a href="#kaderan" className='divisiImg kaderan' data-aos="fade-right" ></a>
                    
                    {/* ------------ */}
                    {/* <img src={kadivHumas} alt="" className='divisiImg humas'/>
                    <img src={kadivLitbang} alt="" className='divisiImg litbang'/>
                    <img src={kadivKwu} alt="" className='divisiImg kwu'/>
                    <img src={kadivKaderan} alt="" className='divisiImg kaderan'/> */}
                </div>
            </div>
        </>
     );
}
 
export default Divisi;