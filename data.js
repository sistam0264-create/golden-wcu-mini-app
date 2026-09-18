const GOLDEN_DATA={
 courses1:["Communicative English 1","Geography","Psychology","Logic and Critical Thinking","Physical Fitness","General Physics","Economics","Mathematics for Natural Science","Mathematics for Social Science"],
 courses2:["Inclusiveness","Introduction to Emerging Technology","Anthropology","Global Trend","Civic and Moral Education","General Chemistry","General Biology","Entrepreneurship","History of Ethiopia and Horn Africa","Applied Mathematics I","Communicative English 2"],
 physicsChapters:[
  {n:1,title:"Preliminaries",topics:["Physical quantities & measurement","SI basic and derived units","Unit conversion","Uncertainty","Significant digits","Scalars & vectors","Vector addition","Vector components","Unit vectors"]},
  {n:2,title:"Kinematics and Dynamics of Particles",topics:["1D & 2D kinematics","Constant acceleration","Free fall","Projectile motion","Forces & Newton's laws","Circular motion","Universal gravitation","Kepler's laws & satellites","Work, energy & power","Momentum & collisions","Center of mass"]},
  {n:3,title:"Fluid Mechanics",topics:["Properties of bulk matter","Density & static pressure","Pascal's law","Buoyancy & Archimedes' principle","Moving fluids","Continuity equation","Bernoulli's equation"]},
  {n:4,title:"Heat and Thermodynamics",topics:["Temperature & zeroth law","Thermal expansion","Heat, work & internal energy","Specific & latent heat","Heat transfer","First law","Thermodynamic processes"]},
  {n:5,title:"Oscillations, Waves and Optics",topics:["Periodic & oscillatory motion","SHM","Simple pendulum","Wave characteristics","Resonance","Doppler effect","Thin lenses & mirrors"]},
  {n:6,title:"Electromagnetism and Electronics",topics:["Coulomb's law & electric fields","Electric potential","Current, resistance & Ohm's law","Electrical energy & power","Equivalent resistance & Kirchhoff's rule","Magnetic field & flux","Electromagnetic induction","Conductors & semiconductors","Diodes","Transistors"]},
  {n:7,title:"Cross Cutting Applications of Physics",topics:["Agriculture & environment","Industries","Health sciences & medical imaging","Archeology","Earth & space sciences","Power generation"]}
 ],
 resources:[
  {group:"Official / Core Physics Materials",name:"General Physics Phys 1011 Module",file:"materials/General_Physics_Phys_1011_Module.pdf",type:"PDF",note:"Core module covering Chapters 1–7."},
  {group:"Official / Core Physics Materials",name:"Chapter Five — Oscillations, Waves and Optics",file:"materials/Chapter_5_Oscillations_Waves_Optics.pptx",type:"PPTX",note:"Teacher-guide style Chapter Five material."},
  {group:"Practice / Worksheets",name:"Physics Worksheet Collection",file:"materials/Physics_Worksheet_Collection.pdf",type:"PDF",note:"Worksheet collection kept separate from past exams."},
  {group:"Wachemo University Past Exams",name:"Wachemo Physics Final Exam — uploaded collection",file:"materials/Wachemo_Physics_Final_Exam.pdf",type:"PDF",note:"Wachemo University exam file supplied in the project."},
  {group:"Different Universities — Past Exams",name:"Addis Ababa University — Physics Midterm 18",file:"materials/AAU_Physics_Midterm_18.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Addis Ababa University — Physics Midterm 25",file:"materials/AAU_Physics_Midterm_25.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Addis Ababa University — Physics Final With Answer",file:"materials/AAU_Physics_Final_With_Answer.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Mekelle University — Physics Midterm 19",file:"materials/Mekelle_Physics_Midterm_19.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Wolaita University — Physics Midterm 20",file:"materials/Wolaita_Physics_Midterm_20.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Wolkite University — Physics Midterm 21",file:"materials/Wolkite_Physics_Midterm_21.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"ASTU — Physics Midterm 22",file:"materials/ASTU_Physics_Midterm_22.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Hawassa University — Physics Midterm 23",file:"materials/Hawassa_Physics_Midterm_23.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"ASTU — Physics Midterm 24",file:"materials/ASTU_Physics_Midterm_24.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Gondar University — Physics Final Exam",file:"materials/Gondar_Physics_Final_Exam.pdf",type:"PDF"},
  {group:"Different Universities — Past Exams",name:"Arsi — Physics Final Exam",file:"materials/Arsi_Physics_Final_Exam.pdf",type:"PDF"},
  {group:"Exam Collections",name:"Physics Final Exams Collection",file:"materials/Physics_Final_Exams_Collection.pdf",type:"PDF",note:"Collection kept as a separate reference bundle."},
  {group:"Exam Collections",name:"AAU Final Exam Collection",file:"materials/AAU_Final_Exam_Collection.pdf",type:"PDF",note:"Collection bundle; individual AAU exams are listed separately above."}
 ],
 otherExamCollection:["Bahir Dar","Addis Ababa","Arba Minch","Jimma","Gondar","Wolkite","AASTU","Debre Tabor","Ambo","Wolaita","Madda Walabu","Debre Berhan","Hawassa","Bule Hora","Dilla","Wachemo"],
 quiz:[
  {q:"Which SI unit is used for length?",o:["kilogram","meter","second","ampere"],a:1,e:"The SI base unit of length is the meter (m)."},
  {q:"Which is a vector quantity?",o:["mass","time","speed","velocity"],a:3,e:"Velocity has both magnitude and direction, so it is a vector."},
  {q:"A scalar quantity is completely specified by…",o:["magnitude only","direction only","magnitude and direction","a diagram only"],a:0,e:"A scalar has magnitude but no direction."},
  {q:"What is the main purpose of unit conversion?",o:["Change the physical quantity","Express a quantity in another unit consistently","Remove uncertainty","Change a vector to a scalar"],a:1,e:"Unit conversion changes the unit representation while preserving the physical quantity."},
  {q:"For multiplication/division of measured quantities, final significant figures are limited by…",o:["the largest number of digits","the least precise factor","the number of zeros","the unit"],a:1,e:"The result is reported to the significant-figure precision of the least accurate factor."},
  {q:"For addition/subtraction, rounding is based mainly on…",o:["smallest decimal place","largest integer","unit symbol","direction"],a:0,e:"The result is rounded to the smallest number of decimal places among the terms."},
  {q:"Which is an example of a derived SI unit?",o:["meter","second","kilogram","newton"],a:3,e:"The newton is derived from kg·m/s²."},
  {q:"If two equal vectors point in exactly opposite directions, their resultant is…",o:["twice one vector","zero","undefined","perpendicular"],a:1,e:"Equal opposite vectors cancel, giving a zero resultant."},
  {q:"A unit vector has magnitude…",o:["0","1","10","depends on its direction"],a:1,e:"A unit vector is defined to have magnitude 1 and specifies direction."},
  {q:"Which statement about uncertainty is appropriate?",o:["Every measurement is exact","A measurement can be reported with an estimated uncertainty","Uncertainty has no relation to measurement","Only vectors have uncertainty"],a:1,e:"Measured values have finite precision and can be reported with an uncertainty."}
 ],
 critical:[
  {q:"Ice has density 0.92 g/cm³ and the liquid has density 1.15 g/cm³. Approximately what fraction of a floating ice cube is above the liquid?",o:["20%","25%","30%","35%"],a:1,e:"For floating equilibrium, submerged fraction ≈ 0.92/1.15 = 0.80, so about 20% is above. Check the choices carefully when solving."},
  {q:"A floating object is 25% submerged. What is the object's density as a fraction of the fluid density?",o:["0.25","0.75","4","1.25"],a:0,e:"For a floating object, ρobject/ρfluid equals the submerged volume fraction."},
  {q:"For ideal incompressible fluid flow, if cross-sectional area decreases, the fluid speed generally…",o:["decreases","increases","becomes zero","does not change"],a:1,e:"The continuity relation Av = constant means smaller area corresponds to higher speed."},
  {q:"Which principle gives buoyant force as the weight of displaced fluid?",o:["Pascal's law","Archimedes' principle","Ohm's law","Hooke's law"],a:1,e:"Archimedes' principle relates buoyant force to the weight of displaced fluid."},
  {q:"A cube displaces fluid with an effective mass of 1800 kg. Using g = 9.8 m/s², its buoyant force is…",o:["9.8 N","1764 N","17640 N","1800 N"],a:2,e:"Fb = mdisplaced g = 1800 × 9.8 = 17640 N."}
 ]
};
