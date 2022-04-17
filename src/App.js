import logo from './logo.svg';
import './App.css';
import useAppAlert from './Components/AppAlert';
import Swal from 'sweetalert2';

function App() {
  let appAlert = useAppAlert()
  let normalAlert = Swal

  const handleNormalClick = () =>{
    normalAlert.fire({
      title: 'แน่ใจที่จะลบข้อมูลใช่หรือไม่',
      text: "ทำไปแล้วไม่สามารถกู้คืนได้",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        normalAlert.fire({
          title:'ลบเรียบร้อย!',
          text:'ไฟล์ถูกลบไปแล้ว',
          icon:'success'
        })
      } else if (result.dismiss === normalAlert.DismissReason.cancel) {
        normalAlert.fire({
          title:'ยกเลิกแล้ว',
          text:'ข้อมูลยังไม่ถูกลบ',
          icon:'error'
        })
      }
    })
  }

  const handleCustomizeClick = () =>{
    appAlert.fire({
      variant:"info",
      title: 'แน่ใจที่จะลบข้อมูลใช่หรือไม่',
      text: "ทำไปแล้วไม่สามารถกู้คืนได้",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        appAlert.fire({
          title:'ลบเรียบร้อย!',
          text:'ไฟล์ถูกลบไปแล้ว',
          icon:'success'
        })
      } else if (result.dismiss === appAlert.DismissReason.cancel) {
        appAlert.fire({
          title:'ยกเลิกแล้ว',
          text:'ข้อมูลยังไม่ถูกลบ',
          icon:'error'
        })
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Customize Sweetalert2</p>
        <div>
        <button onClick={handleNormalClick}>Normal Alert</button>
        <button onClick={handleCustomizeClick}>Customize Alert</button>
        </div>
      </header>
    </div>
  );
}

export default App;
