import React,{useState} from 'react';

const App = () => {

  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [nameFeedback, setNameFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFeedback, setPasswordFeedback] = useState('');
  const [passwordColor, setPasswordColor] = useState('');

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    const specialCharRegex = /[^a-zA-Z0-9 ]/;
    if (specialCharRegex.test(value)) {
      setNameErr('Special characters not allowed');
      setNameFeedback('');
      setFeedbackColor('red');
    } else if (value.length > 5) {
      setNameErr('Please Enter Valid User Name Only 5 Characters Allowed');
      setNameFeedback('');
      setFeedbackColor('red');
    } else if (value.length === 5) {
      setNameErr('');
      setNameFeedback('Perfect!');
      setFeedbackColor('green');
    } else if (value.length > 0) {
      setNameErr('');
      setNameFeedback(`${5 - value.length} more Characters needed`);
      setFeedbackColor('orange');
    } else {
      setNameErr('');
      setNameFeedback('');
      setFeedbackColor('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Validation rules
    const hasSpace = /\s/.test(value);
    const hasCapital = /[A-Z]/.test(value);
    const hasSpecial = /[^a-zA-Z0-9]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    if (value.length === 0) {
      setPasswordFeedback('');
      setPasswordColor('');
    } else if (hasSpace) {
      setPasswordFeedback('Spaces are not allowed');
      setPasswordColor('red');
    } else if (value.length < 8) {
      setPasswordFeedback('Too weak: at least 8 characters required');
      setPasswordColor('red');
    } else if (!hasCapital) {
      setPasswordFeedback('Too weak: include at least 1 capital letter');
      setPasswordColor('orange');
    } else if (!hasSpecial) {
      setPasswordFeedback('Almost there: include at least 1 special character');
      setPasswordColor('#a0522d'); // brownish
    } else if (!hasNumber) {
      setPasswordFeedback('Almost there: include at least 1 number');
      setPasswordColor('#ff9800'); // orangish
    } else {
      setPasswordFeedback('Strong now');
      setPasswordColor('green');
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  // Determine if the login button should be disabled
  const isPasswordValid = passwordFeedback === 'Strong now';
  const isNameValid = !nameErr && name.length === 5;
  const isFormValid = isPasswordValid && isNameValid;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f6fa' }}>
      <form style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '320px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Login</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleName}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your name"
          />
          {nameErr ? (
            <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>{nameErr}</span>
          ) : nameFeedback ? (
            <span style={{ color: feedbackColor, fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>{nameFeedback}</span>
          ) : null}
        </div>
        <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePassword}
            style={{ width: '100%', padding: '0.5rem 2.5rem 0.5rem 0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your password"
          />
          <button
            onClick={togglePassword}
            style={{
              position: 'absolute',
              right: '0.75rem',
              top: '2.2rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: '#888',
              padding: 0
            }}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            type="button"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
          {passwordFeedback && (
            <span style={{ color: passwordColor, fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>{passwordFeedback}</span>
          )}
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', background: isFormValid ? '#4f8cff' : '#b0b8c9', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem', cursor: isFormValid ? 'pointer' : 'not-allowed' }} disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App