var property = new Array();
var unit = new Array();
var factor = new Array();

// ----- Propertiess ----- //
property[0] = "Angle";
unit[0] = ["Degree (°)", "Radian (rad)", "Gradian (grad)", "Minute of Arc (arcmin)", "Second of Arc (arcsec)"];
factor[0] = [1, 0.0174533, 0.015708, 0.000290888, 0.000004848];

property[1] = "Area";
unit[1] = ["Square Meter (m²)", "Square Kilometer (km²)", "Square Centimeter (cm²)", "Square Millimeter (mm²)", "Hectare (ha)", "Acre (ac)", "Square Mile (mi²)", "Square Yard (yd²)", "Square Foot (ft²)", "Square Inch (in²)"];
factor[1] = [1, 1000000, 0.0001, 0.000001, 10000, 4046.86, 2589988, 0.836127, 0.092903, 0.00064516];

property[2] = "Data Storage";
unit[2] = ["Bit (b)", "Byte (B)", "Kilobit (Kb)", "Kilobyte (KB)", "Megabit (Mb)", "Megabyte (MB)", "Gigabit (Gb)", "Gigabyte (GB)", "Terabit (Tb)", "Terabyte (TB)", "Petabit (Pb)", "Petabyte (PB)"];
factor[2] = [1, 0.125, 1000, 125, 1000000, 125000, 1000000000, 125000000, 1000000000000, 125000000000, 1000000000000000, 125000000000000];

property[3] = "Electric Charge";
unit[3] = ["Coulomb (C)", "Milliampere-Hour (mAh)", "Microampere-Hour (µAh)", "Nanocoulomb (nC)", "Picocoulomb (pC)"];
factor[3] = [1, 3.6, 3.6, 0.000000001, 0.000000000001];

property[4] = "Electric Current";
unit[4] = ["Ampere (A)", "Milliampere (mA)", "Microampere (µA)", "Nanoampere (nA)", "Kiloampere (kA)", "Megaampere (MA)"];
factor[4] = [1, 0.001, 0.000001, 0.000000001, 1000, 1000000];

property[5] = "Energy";
unit[5] = ["Joule (J)", "Kilojoule (kJ)", "Calorie (cal)", "Kilocalorie (kcal)", "British Thermal Unit (BTU)", "Foot-Pound (ft-lbf)", "Electronvolt (eV)", "Watt-Hour (Wh)", "Kilowatt-Hour (kWh)", "Megawatt-Hour (MWh)", "Gigawatt-Hour (GWh)", "Terawatt-Hour (TWh)"];
factor[5] = [1, 1000, 4.184, 4184, 1055, 1.35582, 1.60218e-19, 3600, 3600000, 3600000000, 3600000000000, 3600000000000000];

property[6] = "Length";
unit[6] = ["Meter (m)", "Kilometer (km)", "Centimeter (cm)", "Millimeter (mm)", "Micrometer (µm)", "Nanometer (nm)", "Mile (mi)", "Yard (yd)", "Foot (ft)", "Inch (in)"];
factor[6] = [1, 1000, 0.01, 0.001, 0.000001, 0.000000001, 1609.34, 0.9144, 0.3048, 0.0254];

property[7] = "Pressure";
unit[7] = ["Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (MPa)", "Bar (bar)", "Millimeter of Mercury (mmHg)", "Pound per Square Inch (psi)", "Atmosphere (atm)"];
factor[7] = [1, 1000, 1000000, 100000, 133.322, 6894.76, 101325];

property[8] = "Time";
unit[8] = ["Second (s)", "Millisecond (ms)", "Microsecond (µs)", "Nanosecond (ns)", "Minute (min)", "Hour (hr)", "Day (day)", "Week (wk)", "Month (mo)", "Year (yr)"];
factor[8] = [1, 0.001, 0.000001, 0.000000001, 60, 3600, 86400, 604800, 2628000, 31536000];

property[9] = "Velocity";
unit[9] = ["Meter per Second (m/s)", "Kilometer per Hour (km/h)", "Mile per Hour (mph)", "Foot per Second (ft/s)", "Knot (kn)", "Mach (M)"];
factor[9] = [1, 0.277778, 0.44704, 0.3048, 0.514444, 340.29];

property[10] = "Volume";
unit[10] = ["Cubic Meter (m³)", "Cubic Kilometer (km³)", "Cubic Centimeter (cm³)", "Cubic Millimeter (mm³)", "Liter (L)", "Milliliter (mL)", "Gallon (gal)", "Quart (qt)", "Pint (pt)", "Fluid Ounce (fl oz)", "Cubic Foot (ft³)", "Cubic Inch (in³)"];
factor[10] = [1, 1000000000, 0.000001, 0.000000001, 0.001, 0.000001, 0.219969, 0.946353, 0.473176, 0.0295735, 0.0283168, 0.0000163871];

property[11] = "Weight";
unit[11] = ["Kilogram (kg)", "Gram (g)", "Milligram (mg)", "Metric Ton (t)", "Pound (lb)", "Ounce (oz)", "Carat (ct)", "Stone (st)", "Long Ton (long ton)", "Short Ton (short ton)"];
factor[11] = [1, 0.001, 0.000001, 1000, 0.453592, 0.0283495, 0.0002, 6.35029, 1016.05, 907.185];

property[12] = "Work";
unit[12] = ["Joule (J)", "Kilowatt-Hour (kWh)", "Calorie (cal)", "Foot-Pound (ft-lbf)", "British Thermal Unit (BTU)", "Erg (erg)", "Gigajoule (GJ)", "Megajoule (MJ)"];
factor[12] = [1, 3600000, 4.184, 1.35582, 1055, 0.0000001, 1000000000, 1000000];


// ----- Functionss ----- //
function UpdateUnitMenu(propMenu, unitMenu) {
	var i;
	i = propMenu.selectedIndex;
	FillMenuWithArray(unitMenu, unit[i]);             // Update unit menu based on the selected property
}

function FillMenuWithArray(myMenu, myArray) {
	var i;
	myMenu.length = myArray.length;
	for (i = 0; i < myArray.length; i++) {
		myMenu.options[i].text = myArray[i];         // Fill the menu options with the array values
	}
}

function CalculateUnit(sourceForm, targetForm) {
	var sourceValue = sourceForm.unit_input.value;

	sourceValue = parseFloat(sourceValue);
	if (!isNaN(sourceValue) || sourceValue == 0) {
		sourceForm.unit_input.value = sourceValue;
		ConvertFromTo(sourceForm, targetForm);       // Do the unit conversion magic
	}
}

function ConvertFromTo(sourceForm, targetForm) {
	var propIndex;
	var sourceIndex;
	var sourceFactor;
	var targetIndex;
	var targetFactor;
	var result;

	propIndex = document.property_form.the_menu.selectedIndex;   // Get the selected property index

	sourceIndex = sourceForm.unit_menu.selectedIndex;
	sourceFactor = factor[propIndex][sourceIndex];                // Get the source unit factor

	targetIndex = targetForm.unit_menu.selectedIndex;
	targetFactor = factor[propIndex][targetIndex];                // Get the target unit factor

	result = sourceForm.unit_input.value;
	result = result * sourceFactor;
	result = result / targetFactor;                               // Perform the unit conversion

	targetForm.unit_input.value = result;                         // Set the converted result in the target form
}

window.onload = function (e) {
	FillMenuWithArray(document.property_form.the_menu, property);                            // Fill the property menu
	UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);             // Update the unit menu for form A
	UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);             // Update the unit menu for form B
};

document
	.getElementByClass("numbersonly")
	.addEventListener("keydown", function (e) {
		var key = e.keyCode ? e.keyCode : e.which;

		if (
			!(
				(
					[8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
					(key == 65 && (e.ctrlKey || e.metaKey)) ||                          // Allow select all
					(key == 67 && (e.ctrlKey || e.metaKey)) ||                          // Allow copy
					(key == 86 && (e.ctrlKey || e.metaKey)) ||                          // Allow paste
					(key >= 35 && key <= 40) ||                                         // Allow navigation keys (End, Home, Arrows)
					(key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||             // Allow numeric keys
					(key >= 96 && key <= 105)                                           // Allow numpad
				) || (key == 190)                                                       // Allow dot on numpad
			)
		)
			e.preventDefault();                                                       // Prevent input of disallowed keys
	});
