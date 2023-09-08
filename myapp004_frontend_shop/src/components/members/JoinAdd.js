import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JoinAdd = () => {
    const navigator = useNavigate();
    const [members, setMembers] = useState({
        // State 선언은 무조건 대괄호 [] 로 한단다
        memberEmail : '',
        memberPass : '',
        memberName : '',
        memberPhone : ''
    });
    const handleValueChange = (e) => {
        setMembers({...members,[e.target.name]:e.target.value})
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        await axios
        .post('/member/signup', members)
        .then((response) => {
            navigator('/')
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='container'>
                    <h1>회원가입</h1>
                    <div className='form-group mb-1'>
                        <input
                            type='email'
                            className='form-control'
                            name='memberEmail'
                            placeholder='이메일'
                            onChange={handleValueChange}
                        />
                    </div>
                    <div className='form-group mb-1'>
                        <input
                            type='password'
                            className='form-control'
                            name='memberPass'
                            placeholder='비밀번호'
                            onChange={handleValueChange}
                        />
                    </div>
                    <div className='form-group mb-1'>
                        <input
                            type='text'
                            className='form-control'
                            name='memberName'
                            placeholder='이름'
                            onChange={handleValueChange}
                        />
                    </div>
                    <div className='form-group mb-1'>
                        <input
                            type='text'
                            className='form-control'
                            name='memberPhone'
                            placeholder='연락처'
                            onChange={handleValueChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        가입 완료
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JoinAdd;