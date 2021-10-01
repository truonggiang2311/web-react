import Button from 'react-bootstrap/Button'
import { Modal } from "react-bootstrap";
import { useState } from 'react';

export default function CheckOut() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Đặt Hàng
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thông Báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn đã đặt hàng thành công.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  