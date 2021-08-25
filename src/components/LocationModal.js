import React  from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import SectionAbout from './locationInfo/SectionAbout'
import SectionDescription from './locationInfo/SectionDescription'
import './LocationModal.css'

const LocationModal = (props) => (
   <div>
      {props.show &&
      <Modal show={props.show} onHide={props.onHide}>
         <Modal.Header closeButton>
         <Modal.Title>{props.location.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <SectionAbout location={props.location}/>
         <SectionDescription location={props.location}/>
      </Modal.Body>
      <Modal.Footer>
         <Button variant="primary" onClick={props.onHide}>
            Done
         </Button>
      </Modal.Footer>
   </Modal>
      }
   </div>
)

export default LocationModal
