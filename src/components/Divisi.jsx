import './Divisi.css';

const Divisi = () => {
    return ( 
        <>
            <div className="divisi" id='divisi'>
                <p className='title'>Daftar Divisi .</p>
                <div className="listDivisi">
                    <a href="#bph" className='divisiImg bph'></a>
                    <a href="#humas" className='divisiImg humas'></a>
                    <a href="#litbang" className='divisiImg litbang'></a>
                    <a href="#kwu" className='divisiImg kwu'></a>
                    <a href="#kaderan" className='divisiImg kaderan'></a>
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