import React from "react";
import {
  Smartphone,
  Clock,
  Heart,
  Shield,
  Users,
  CheckCircle,
  Download,
} from "lucide-react";
import logo from "./assets/logo.png";
import "./App.css";
import imagenAbuelo from "./assets/imagenabuelo.png";
import imagenAbuelo2 from "./assets/imagenabuelo2.png";

function App() {
  return (
    <div className="app" style={{ backgroundColor: "#F7F4FF" }}>
      {}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-title">
            <div className="icon-bg">
              <img src={logo} alt="Logo" className="icon-img" />
            </div>
            <h1>Remind</h1>
          </div>
          <p className="subtitle">Nunca más olvides lo importante</p>
          <p className="description">
            La aplicación de recordatorios diseñada especialmente para adultos
            mayores. Medicinas, citas médicas y visitas familiares, todo
            organizado de forma simple y clara.
          </p>

          <div className="hero-image">
            {}
            <img src={imagenAbuelo} alt="abuelo" />
          </div>

          <div className="hero-buttons">
            <button>
              <Download className="button-icon" />
              Descargar Remind
            </button>
            <p>Disponible para Android e iOS</p>
          </div>
        </div>
      </section>

      {}
      <section className="problems">
        <h2 className="section-title">¿Te resulta familiar?</h2>
        <div className="problem-cards">
          <div className="card red">
            <h3>Olvidas medicinas</h3>
            <p>Las dosis se pasan por alto y genera preocupación</p>
          </div>
          <div className="card orange">
            <h3>Faltas a citas</h3>
            <p>Las visitas médicas se olvidan fácilmente</p>
          </div>
          <div className="card blue">
            <h3>Familia preocupada</h3>
            <p>Los seres queridos viven con constante inquietud</p>
          </div>
        </div>
      </section>

      {}
      <section className="solution" style={{ textAlign: "center" }}>
        <h2 className="section-title" style={{ color: "#2165CD" }}>
          Remind es tu solución
        </h2>
        <p
          style={{
            color: "#616876",
            fontSize: "1rem",
            marginTop: "0.5rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Una app clara, simple y diseñada para vos. Recordatorios confiables y
          tranquilidad para toda la familia.
        </p>
      </section>

      {}
      <section className="features">
        <div className="feature-list">
          <div className="feature">
            <div className="feature-icon">
              <Smartphone />
            </div>
            <div>
              <h3>Interfaz súper simple</h3>
              <p>Botones grandes, letras claras y navegación intuitiva</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <Clock />
            </div>
            <div>
              <h3>Recordatorios inteligentes</h3>
              <p>Alertas por voz, vibración y pantalla para nunca olvidar</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <Heart />
            </div>
            <div>
              <h3>Pensado para ti</h3>
              <p>Diseñado específicamente para adultos mayores</p>
            </div>
          </div>
        </div>
        <div className="feature-image">
          {}
          <img src={imagenAbuelo2} alt="abuelo" />
        </div>
      </section>

      {}
      <section className="benefits" style={{ textAlign: "center" }}>
        <div className="benefits-header">
          <h2
            style={{
              color: "#2165CD",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            Con Remind, vivís tranquilo
          </h2>
          <p
            style={{
              color: "#616876",
              fontSize: "1rem",
              marginTop: "0.5rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Recupera tu independencia y disfruta de la tranquilidad que vos y tu
            familia merecen
          </p>
        </div>

        <div className="benefit-cards">
          <div className="benefit-card">
            <Shield className="benefit-icon" />
            <h3>Más independencia</h3>
            <p>Gestioná tus tareas sin depender de otros</p>
          </div>
          <div className="benefit-card">
            <CheckCircle className="benefit-icon green" />
            <h3>Mejor organización</h3>
            <p>Todo en un lugar, simple y ordenado</p>
          </div>
          <div className="benefit-card">
            <Heart className="benefit-icon red" />
            <h3>Familia tranquila</h3>
            <p>Tus seres queridos descansan sabiendo que estás bien</p>
          </div>
          <div className="benefit-card">
            <Users className="benefit-icon blue" />
            <h3>Apoyo familiar</h3>
            <p>Conexión simple con quienes te cuidan</p>
          </div>
        </div>

        {}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button className="download-btn">
            <Download className="button-icon" />
            Empieza ahora
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
