import React, { Component } from 'react';
import "./Register.css";
import axios from 'axios';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      category: null,
      toggle: false,
      userDetails: {
        username:'',
        email:'',
        password:'',
        name:'',
        graduationCourse:'',
        specialization:'',
        university:'',
        graduationYear:'',
        highestEducation:'',
        profession:'',
        currentUniversity:'',
      },
    };
  }

  handleNext = () => {
    this.setState(prevState => ({ step: prevState.step + 1, toggle: !this.state.toggle }));
  }
  handlePrev = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  }

  handleCategorySelection = (category) => {
    this.setState({ category });
  }

  handleRegister = async()=>{
    try{
      const response = await axios.post('/api/auth/register',this.state.userDetails);
      console.log(response.data);
    }
    catch(error){
      console.error('Registration error:',error.message);
    }
  }
  render() {
    return (
      <div className='register-container'>
        <div className='category'>
        {this.state.step === 1 && (
          <div className='cat-container'>
            <h2 className='cat'>Select Your Category</h2>
          <div className='cat-sel'>
          <label>
              <input type="radio" name="category" value="School" onChange={() => this.handleCategorySelection('School')} />
              School
            </label>
            <label>
              <input type="radio" name="category" value="College" onChange={() => this.handleCategorySelection('College')} />
              College
            </label>
            <label>
              <input type="radio" name="category" value="Profession" onChange={() => this.handleCategorySelection('Profession')} />
              Profession
            </label><button className="cat-btn" onClick={this.handleNext}>Next</button>
          </div>
          </div>
        )}
        {this.state.step === 2 && (
          <div className='cat-details'>
            <h2 className='cat'>User Details</h2>
            {this.state.category === 'School' && (
              <div className='cat-form'>
                <input className="cat-input" type="text" placeholder="Name" />
                <input className="cat-input" type="text" placeholder="Stream" />
              </div>
            )}
            {this.state.category === 'College' && (
              <div className='cat-form'>
                <input className="cat-input" type="text" placeholder="Name" />
                <input className="cat-input" type="text" placeholder="Degree Persuing e.g. BTech" />
                <input className="cat-input" type="text" placeholder="Specialization e.g. CSE" />
                <input className="cat-input" type="text" placeholder="University e,g, LPU" />
                <input className="cat-input" type="text" placeholder="Graduation Year e.g. 2025" />
              </div>
            )}
            {this.state.category === 'Profession' && (
              <div className='cat-form'>
                <input className="cat-input" type="text" placeholder="Name" />
                <input className="cat-input" type="text" placeholder="Highest Education e.g. MBA" />
                <input className="cat-input" type="text" placeholder="Profession e.g. Software Developer" />
                <input className="cat-input" type="text" placeholder="Company(if working)" />
                <input className="cat-input" type="text" placeholder="University(if higher education)" />
              </div>
            )}
            <div className='btn-details'>
            <button className="cat-btn" onClick={this.handlePrev}>Back</button>
            <button className="cat-btn" onClick={this.handleNext}>Register</button>
            </div>
          </div>
        )}
      </div>
      
      </div>
    );
  }
}

export default RegistrationForm;