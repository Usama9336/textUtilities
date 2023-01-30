import React from 'react'
function Alert(props) {
  const capitalize=(word)=>{
    console.log(word);
    
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);//substring;
  }
  return (
    <div>
    props.alert && <div className={`alert alert-{props.alert} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert