# Steps to Solve the OTP Input Component Problem

## Steps to Solve

1. **Create OTP Component**  
   - Dynamic number of inputs based on props.  
   - Use `useRef` to manage references.  
     **[Learning]**: Using `useRef` with `map` → `ref={(el) => (inputRefs.current[index] = el)}`  

2. **State Management**  
   - Create an array of state variables to store OTP values.

---

## Goals and Solutions

### a. Restrict Input to a Single Character  
**Solution**: `newOtp[index] = value.substring(value.length - 1);`

### b. Focus on First Input on Component Mount  
**Solution**: Use `useEffect`.

### c. Move to Next Input After Typing a Number  
**Solution**:  
`if (value && index < otpLength - 1) { inputRefs.current[index + 1].focus(); }`

### d. Move Backward on Backspace  
**Solution**:  
`if (e.key === "Backspace" && index > 0 && !otp[index]) { inputRefs.current[index - 1].focus(); }`

### e. Always Keep Cursor at the End  
**Solution**:  
`inputRefs.current[index].setSelectionRange(1, 1);`

### f. Move to First Empty Field if Previous Inputs Are Empty  
**Solution**:  
`if (index > 0 && !otp[index - 1]) { inputRefs.current[otp.indexOf("")].focus(); }`
