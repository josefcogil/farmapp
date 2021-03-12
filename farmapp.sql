-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2021 a las 02:20:13
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `farmapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `cedula` varchar(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `cedula`, `nombre`, `direccion`, `telefono`) VALUES
(1, '18330160', 'iliana briceno', 'Banco obrero', '02574567895');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmacias`
--

CREATE TABLE `farmacias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `farmacias`
--

INSERT INTO `farmacias` (`id`, `nombre`, `direccion`) VALUES
(1, 'Farma asistencia ', 'Av. Simon bolivar calle 12 y 13'),
(2, 'Farpaca san luis', 'Esquina av. 23 de enero'),
(3, 'Farmacia Paez', 'Av. la hilandera '),
(4, 'Farmatodo', 'Av. 23 de enero'),
(5, 'Farmacia del centro', 'calle 18'),
(6, 'Farmatodo', 'edificio maribel entre carreras 12 y 13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmacos`
--

CREATE TABLE `farmacos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `farmaco` varchar(255) NOT NULL,
  `presentacion` varchar(255) NOT NULL,
  `mg` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `farmacos`
--

INSERT INTO `farmacos` (`id`, `nombre`, `farmaco`, `presentacion`, `mg`) VALUES
(1, 'Urtisin', 'Loratadina', 'tabletas', '10'),
(2, 'takilpam', 'losartan', 'Comprimidos recubiertos', '50'),
(3, 'Onemer', 'KETOROLACO', 'Tabletas recubiertas', '10'),
(4, 'Agrulax', 'HIDROXIDO DE MAGNESIO', 'polvo', '15000'),
(5, 'Agrifen', 'PARACETAMOL, DEXTROMETORFANO,\r\nFENILEFRINA, CLORFENAMINA', 'polvo', '650'),
(6, 'AMK', 'Amikacina', 'solución inyectable ', '500'),
(7, 'Amoxiclav', 'Amoxicilina/Acido Clavulánico', 'tabletas', '875'),
(8, 'Urtisin', 'loratadina', 'jarabe', '100'),
(9, 'Uxicolin', 'SUXAMETONIO', 'tabletas', '40'),
(11, 'Diclopisa', 'Diclofenaco Sódico', 'solucion inyectable', '75'),
(12, 'amoxiclav', 'Amoxicilina/Acido Clavulánico', 'tabletas', '500'),
(13, 'ANTADONA', 'Flumazenil', 'solucion inyectable', '0.5'),
(14, 'Capin BH', 'BUTILHIOSCINA', 'solucion inyectable', '20'),
(15, 'Edorame', 'VALPROATO DE MAGNESIO', 'Tabletas con capa entérica', '200'),
(16, 'Falot', 'CEFALOTINA SODICA', 'solucion inyectable ', '1000'),
(18, 'ROLO D', 'OXICODONA', 'capsulas', '5'),
(19, 'Atamel', 'Acetaminofen', 'tabletas', '1000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmaco_farmacia`
--

CREATE TABLE `farmaco_farmacia` (
  `id_farmaco` int(10) NOT NULL,
  `id_farmacia` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `farmaco_farmacia`
--

INSERT INTO `farmaco_farmacia` (`id_farmaco`, `id_farmacia`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(3, 2),
(6, 2),
(7, 2),
(18, 2),
(15, 2),
(8, 2),
(13, 3),
(3, 3),
(7, 3),
(1, 3),
(15, 3),
(18, 3),
(1, 4),
(2, 4),
(8, 4),
(9, 4),
(15, 4),
(18, 5),
(15, 5),
(5, 5),
(10, 5),
(16, 5),
(10, 6),
(11, 6),
(12, 6),
(13, 6),
(14, 6),
(15, 6),
(19, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmaco_patologia`
--

CREATE TABLE `farmaco_patologia` (
  `id_farmaco` int(10) NOT NULL,
  `id_patologia` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `farmaco_patologia`
--

INSERT INTO `farmaco_patologia` (`id_farmaco`, `id_patologia`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 6),
(8, 5),
(9, 3),
(11, 3),
(12, 6),
(13, 7),
(14, 8),
(15, 9),
(16, 6),
(17, 6),
(18, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `farmaco_recipe`
--

CREATE TABLE `farmaco_recipe` (
  `id_farmaco` int(10) NOT NULL,
  `id_recipe` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `id` int(11) NOT NULL,
  `cedula` varchar(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `especialidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`id`, `cedula`, `nombre`, `especialidad`) VALUES
(1, '19957785', 'Gabriela Vetencourt', 'Cardiologo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patologias`
--

CREATE TABLE `patologias` (
  `id` int(11) NOT NULL,
  `patologia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `patologias`
--

INSERT INTO `patologias` (`id`, `patologia`) VALUES
(1, 'Alergia'),
(2, 'Hipertension'),
(3, 'Dolor'),
(4, 'Malestar estomacal'),
(5, 'Resfriado'),
(6, 'Infeccion'),
(7, 'intoxicacion'),
(8, 'Espasmos muscular'),
(9, 'epilepsia ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`) VALUES
(1, 'Color favorito'),
(2, 'Nombre de su mascota'),
(3, 'Postre favorito'),
(4, 'Marca de su primer vehiculo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `id_medico` int(10) NOT NULL,
  `ci_paciente` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `clave` varchar(20) NOT NULL,
  `id_pregunta` int(10) NOT NULL,
  `respuesta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `correo`, `clave`, `id_pregunta`, `respuesta`) VALUES
(2, 'Gabriela', 'Vetencourt', 'gabivete@gmail.com', '1234', 1, 'AZUL');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `farmacias`
--
ALTER TABLE `farmacias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `farmacos`
--
ALTER TABLE `farmacos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `patologias`
--
ALTER TABLE `patologias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `farmacias`
--
ALTER TABLE `farmacias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `farmacos`
--
ALTER TABLE `farmacos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `medicos`
--
ALTER TABLE `medicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `patologias`
--
ALTER TABLE `patologias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
