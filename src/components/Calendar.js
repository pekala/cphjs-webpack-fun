import React, { PropTypes } from 'react'
import 'react-date-picker/index.css'
import { Calendar as DatePicker } from 'react-date-picker'
import Modal from 'react-modal'

const Calendar = ({ isOpen, toggleCalendar }) => (
    <Modal isOpen={isOpen} contentLabel="Calendar" onRequestClose={toggleCalendar}>
        <DatePicker dateFormat="YYYY-MM-DD" date="2017-04-24" />
    </Modal>
)

Calendar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCalendar: PropTypes.func.isRequired,
}

export default Calendar
