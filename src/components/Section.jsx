import {useState} from 'react';
import '../styles/Section.css'

export function GeneralSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showEdit, setShowEdit] = useState(true)

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
    <section className="section">
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
    </section>
  );
}

export function EducationSection() {

  const [school, setSchool] = useState('');
  const [program, setProgram] = useState('');
  const [years, setYears] = useState('');
  const [showEdit, setShowEdit] = useState(true);

  function onChangeSchool(e) {
    setSchool(e.target.value);
  }

  function onChangeProgram(e) {
    setProgram(e.target.value);
  }

  function onChangeYears(e) {
    setYears(e.target.value);
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
    <section className='section'>
      <h2>Education History</h2>
      {showEdit ? (
        <div className="edit">
          <InputField
            label='School' 
            type='text'
            value={school}
            onChange={onChangeSchool}
          />
          <InputField
            label='Program' 
            type='text'
            value={program}
            onChange={onChangeProgram}
          />
          <InputField
            label='Years' 
            type='text'
            value={years}
            onChange={onChangeYears}
          />

          <Button 
            name="submit"
            text='Submit Fields'
            onClick={onClickSubmit}
          />
        </div>
      ) : (
        <div className="submit">
          <DisplayField 
            label='School'
            value={school}
          />
          <DisplayField 
            label='Program'
            value={program}
          />
          <DisplayField 
            label='Years'
            value={years}
          />

          <Button
            name = "edit" 
            text="Edit Fields"
            onClick = {onClickEdit}
          />
        </div>
      )}
    </section>
  )
}

export function WorkSection() {

  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [duties, setDuties] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [showEdit, setShowEdit] = useState(true);

  function onChangeCompany(e) {
    setCompany(e.target.value);
  }

  function onChangePosition(e) {
    setPosition(e.target.value);
  }

  function onChangeDuties(e) {
    setDuties(e.target.value);
  }

  function onChangeDateStart(e) {
    setDateStart(e.target.value);
  }

  function onChangeDateEnd(e) {
    setDateEnd(e.target.value);
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
    <section className="section">
      <h2>Work History</h2>
      {showEdit ? (
        <div className="edit">
          <InputField
            label='Company' 
            type='text'
            value={company}
            onChange={onChangeCompany}
          />
          <InputField
            label='Position' 
            type='text'
            value={position}
            onChange={onChangePosition}
          />
          <InputField
            label='Duties' 
            type='text'
            value={duties}
            onChange={onChangeDuties}
          />
          <InputField
            label='Date Started' 
            type='text'
            value={dateStart}
            onChange={onChangeDateStart}
          />
          <InputField
            label='Date Ended' 
            type='text'
            value={dateEnd}
            onChange={onChangeDateEnd}
          />

          <Button 
            name="submit"
            text='Submit Fields'
            onClick={onClickSubmit}
          />
        </div>
      ) : (
        <div className="submit">
          <DisplayField 
            label='Company'
            value={company}
          />
          <DisplayField 
            label='Position'
            value={position}
          />
          <DisplayField 
            label='Duties'
            value={duties}
          />
          <DisplayField 
            label='Date Started'
            value={dateStart}
          />
          <DisplayField 
            label='Date Ended'
            value={dateEnd}
          />

          <Button
            name = "edit" 
            text="Edit Fields"
            onClick = {onClickEdit}
          />
        </div>
      )}
    </section>
  )
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