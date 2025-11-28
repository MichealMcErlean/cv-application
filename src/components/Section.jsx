import {useState} from 'react';
import '../styles/Section.css'

export function GeneralSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showEdit, setShowEdit] = useState(true)

  const editField = document.querySelector('.edit');
  const submitField = document.querySelector('.submit');

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePhone(e) {
    setPhone(e.target.value);
  }

  function onClickSubmit(e) {
    e.preventDefault();
    setShowEdit(false);
  }

  function onClickEdit(e) {
    e.preventDefault();
    setShowEdit(true);
  }


  return (
    <div className="section">
      <h2>General Information</h2>
      
      {showEdit ? (
        <div className="edit">
          <InputField 
            label="Name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
          <InputField 
            label="Email"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
          <InputField 
            label="Telephone No."
            type="tel"
            value={phone}
            onChange={onChangePhone}
          />
          <Button
            name = "submit" 
            text="Submit Fields"
            onClick = {onClickSubmit}
          />
        </div>
      ) : (
        <div className="submit">
          <DisplayField 
            label="Name"
            value = {name}
          />
          <DisplayField 
            label="Email"
            value={email}
          />
          <DisplayField 
            label="Telephone No."
            value={phone}
          />
          <Button
            name = "edit" 
            text="Edit Fields"
            onClick = {onClickEdit}
          />
        </div>
      )}
    </div>
  );
}

export function InputField({label, type, value, onChange}) {

  return (
    <>
      <p>
        <label htmlFor="{label}">{label}: </label>
        <input
          type={type}
          name="{label}"
          id="{label}"
          value={value}
          onChange = {onChange}
        />
      </p>
    </>
  );
}

export function DisplayField({label, value}) {

  return (
    <>
      <p>
        <label htmlFor="{label}">{label}: </label>
        <span>{value}</span>
      </p>
    </>
  );
}

export function Button({name, text, onClick}) {

  return (
    <>
      <button
        type="button" 
        name={name}
        onClick={onClick}
      >{text}
      </button>
    </>
  )
}