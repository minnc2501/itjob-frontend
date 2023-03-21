import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react'
import ReactDOM  from 'react-dom';
import Logo from './OIP.jpg'


function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    setIsLoading(true);
    axios.get(`http://localhost:5001/api/job_it?input=${inputValue}`)
      .then(response => {
        console.log(response.data); // In ra dữ liệu nhận được từ API
        setList(response.data); // Lưu dữ liệu vào state để hiển thị ra giao diện
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
      
  };

  return (
    <div className="App">
      <header className="App-header">
        <img style={{width: '80px'}} src={Logo}/>
        <p>
          Nhóm 1
        </p>
        <p>
          Báo cáo đồ án cuối kỳ
        </p>
        <p>
          Đề tài: Xây dựng hệ thống đề xuất việc làm sử dụng thuật toán K-Means, KNN, Decision Tree, Logistic Regression
        </p>
        <div>
          <input type="text" className="jobs" placeholder="Nhập kỹ năng của bạn" value={inputValue} onChange= {handleInputChange}/>
          <button type="submit" className="" onClick={handleButtonClick}>Nhận đề xuất</button>
          {isLoading && (
            <>
            <div style={{marginTop: '20px'}}>Loading... Vui lòng đợi</div>
            </>
          )}
          {!isLoading && list.length > 0 && (
            <table>
            <thead>
              <tr>
                <th>Link</th>
                <th>Tên công ty</th>
                <th>Loại nhân viên/công việc</th>
                <th>Mô tả công việc</th>
                <th>Địa chỉ công ty</th>
                <th>Tên công việc</th>
                <th>Kỹ năng yêu cầu</th>
                <th>Label</th>
              </tr>
            </thead>
            <tbody>
              {list.map((job,index) => (
                <tr key={index}>
                  <td>{job.advertiserurl}</td>
                  <td>{job.company}</td>
                  <td>{job.employmenttype_jobstatus}</td>
                  <td>{job.jobdescription}</td>
                  <td>{job.joblocation_address}</td>
                  <td>{job.jobtitle}</td>
                  <td>{job.skills}</td>
                  <td>{job.Label}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </header>
    </div>
  );

}
export default App;
