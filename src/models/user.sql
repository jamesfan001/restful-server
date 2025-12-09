CREATE TABLE `resu` (
  `OID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TableName` varchar(20) NOT NULL DEFAULT 'RESU',
  `User` varchar(40) DEFAULT NULL,
  `FullName` varchar(40) DEFAULT NULL,
  `Pwd` varchar(20) DEFAULT NULL,
  `Level` mediumint(9) DEFAULT NULL,
  `Showed` tinyint(1) DEFAULT '0',
  `Ext` varchar(10) DEFAULT NULL,
  `EMail` varchar(50) DEFAULT NULL,
  `StationID` varchar(20) DEFAULT NULL,
  `Payroll` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`OID`),
  KEY `User` (`User`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;