INSERT INTO teams (name, country) VALUES
('K-PAX', 'USA'),
('Crowdstrike Racing with Riley Motorsports', 'USA'),
('US Racetronics', 'USA'),
('DXDT Racing', 'USA'),
('TR3 Racing', 'USA'),
('Ian Lacy Racing', 'USA'),
('Triarsi Competizione', 'USA'),
('RealTime Racing', 'USA'),
('Wright Motorsports', 'USA'),
('AF CORSE', 'USA'),
('Zelus Motorsports', 'USA'),
('Racers Edge Motorsports', 'USA'),
('BimmerWorld', 'USA'),
('Turner Motorsport', 'USA'),
('ST Racing', 'Canada');

INSERT INTO vehicles (manufacturer, model,  number, classification, team_id)
VALUES
('Lamborghini', 'Huracan GT3', "1", 'Pro', 1),
('Lamborghini', 'Huracan GT3', "3", 'Pro', 1),
('Mercedes', 'AMG GT3', "04", 'Pro-Am', 2),
('Mercedes', 'AMG GT3', "6", 'Pro', 3),
('Mercedes', 'AMG GT3', "08", 'Pro-Am', 4),
('Lamborghini', 'Huracan GT3', "9", 'Pro-Am', 5),
('Aston Martin', 'Vantage AMR GT3', '12', 'Pro-Am', 6),
('Ferrari', '488 GT3', '13', 'Pro-Am', 7),
('Ferrari', '488 GT3', '23', 'Am', 7),
('Acura', 'NSX GT3', '43', 'Pro-Am', 8),
('Porsche', '911 GT3-R (991.ii)', '45', 'Pro-Am', 9),
('Ferrari', '488 GT3', '61', 'Am', 10),
('Mercedes', 'AMG GT3', '63', 'Pro-Am', 4),
('Lamborghini', 'Huracan GT3', '88', 'Pro-Am', 11),
('Lamborghini', 'Huracan GT3', '91', 'Pro-Am', 11),
('Acura', 'NSX GT3', '93', 'Pro-Am', 12),
('BMW', 'M4 GT3', '94', 'Pro-Am', 13),
('BMW', 'M4 GT3', '96', 'Pro', 14),
('BMW', 'M4 GT3', '28', 'Pro', 15);

INSERT INTO drivers (name, rating, nationality, team_id, vehicle_id) VALUES
('Michele Beretta', 'Silver', 'Italy', 1, 1),
('Andrea Caldarelli', 'Platinum', 'Italy', 1, 1),
('Misha Goikhberg', 'Silver', 'Canada', 1, 2),
('Jordan Pepper', 'Gold', 'South Africa', 1, 2),
('George Kurtz', 'Bronze', 'USA', 2, 3),
('Colin Braun', 'Gold', 'USA', 2, 3),
('Steven Aghakhani', 'Silver', 'USA', 3, 4),
('Loris Spinelli', 'Silver', 'Italy', 3, 4);