import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Modal, Nav, Navbar, Row, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Home = () => {
    // 1. State Tanımlamaları
    const [items, setItems] = useState(() => {
        const saveItem = localStorage.getItem("data");
        return saveItem ? JSON.parse(saveItem) : [];
    });

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [open, setOpen] = useState(false);

    // 2. LocalStorage Bekçisi (useEffect) - Ekranın gitmesini engelleyen kısım burası
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(items));
    }, [items]);

    // 3. Fonksiyonlar
    const closeModal = () => setOpen(false);
    const showModal = () => setOpen(true);

    const createHero = () => {
        if (!text || !amount || !type || type === "Select type") {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        const newHero = {
            id: Date.now(),
            title: text,
            type: type,
            amount: amount
        };

        setItems([...items, newHero]);
        setText(""); setAmount(""); setType(""); // Formu temizle
        closeModal();
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Navbar */}
            <Navbar variant="dark" expand="lg" className="bg-dark mb-5 shadow-sm py-3">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold fs-3 text-white">
                        GKAY <span className="text-danger">Tracker</span>
                    </Navbar.Brand>
                    <Button variant="danger" className="fw-bold px-4 shadow-sm" onClick={showModal}>
                        + Yeni Ekle
                    </Button>
                </Container>
            </Navbar>

            {/* İçerik */}
            <Container>
                <Row>
                    {items.length === 0 ? (
                        <Col className="text-center mt-5">
                            <h4 className="text-muted">Henüz kayıt yok. Yeni bir tane ekle!</h4>
                        </Col>
                    ) : (
                        items.map((i) => (
                            <Col key={i.id} xl={3} lg={4} md={6} className="mb-4">
                                <Card className="border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex justify-content-between mb-3">
                                            <Badge bg={i.type === "Harcama" ? "danger" : i.type === "Görev" ? "success" : "info"} className="px-3 py-2">
                                                {i.type}
                                            </Badge>
                                            <span className="fw-bold text-secondary">{i.amount}</span>
                                        </div>
                                        <Card.Title className="fw-bold fs-4 mb-4">{i.title}</Card.Title>
                                        <Button 
                                            variant="outline-danger" 
                                            size="sm" 
                                            className="mt-auto border-0 text-decoration-underline"
                                            onClick={() => deleteItem(i.id)}
                                        >
                                            Kaydı Sil
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>

            {/* Modal */}
            <Modal centered show={open} onHide={closeModal} contentClassName="rounded-4 border-0">
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="fw-bold">Yeni Kayıt</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4 pb-4">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="small fw-bold">Başlık</Form.Label>
                            <Form.Control className="p-2 shadow-sm" value={text} onChange={(e) => setText(e.target.value)} placeholder='Örn: Kira Ödemesi' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="small fw-bold">Tür</Form.Label>
                            <Form.Select className="p-2 shadow-sm" value={type} onChange={(e) => setType(e.target.value)}>
                                <option>Select type</option>
                                <option>Harcama</option>
                                <option>Görev</option>
                                <option>Not</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className="small fw-bold">Miktar</Form.Label>
                            <Form.Control className="p-2 shadow-sm" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Örn: 2000 TL' />
                        </Form.Group>
                        <Button variant="danger" className="w-100 py-2 fw-bold rounded-3" onClick={createHero}>
                            Kaydet
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Home;