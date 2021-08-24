import React, {Component, useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const LocationModal = (props) => (
      <div>
         {props.show &&
         <Modal show={props.show} onHide={props.onHide}>
         <Modal.Header closeButton>
         <Modal.Title>{props.location.name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
