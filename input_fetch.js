function create_input_json() {
        var input_json = {};
        input_json["Barrel"] =      {
            "Diameter"               : parseInt(document.getElementsByName("barrel_diameter")[0].value),
            "Length"                 : parseInt(document.getElementsByName("barrel_length")[0].value),
            "Number_Rifling_Twist"   : parseFloat(document.getElementsByName("barrel_nrt")[0].value)
        };
         input_json["Chamber"] =    {
            "Length"                 : parseInt(document.getElementsByName("chamber_length")[0].value),
            "Volume"                 : parseFloat(document.getElementsByName("chamber_volume")[0].value)

        };
        input_json["Projectile"] =  {
            "Mass"                   : parseFloat(document.getElementsByName("projectile_mass")[0].value),
            "Rotational_Inertia"     : parseFloat(document.getElementsByName("projectile_rot_In")[0].value)
            
        };
        input_json["Propellant"] =  {
            "Mass"                   : parseFloat(document.getElementsByName("prop_mass")[0].value),
            "Density"                : parseInt(document.getElementsByName("prop_density")[0].value),
            "Force_Constant"         : parseInt(document.getElementsByName("prop_fc")[0].value),
            "Gamma"                  : parseFloat(document.getElementsByName("prop_gamma")[0].value),
            "Molecular_Mass"         : parseFloat(document.getElementsByName("prop_mol_mass")[0].value),
            "Outer_Diameter"         : parseFloat(document.getElementsByName("prop_out_dia")[0].value),
            "Hole_Diameter"          : parseFloat(document.getElementsByName("prop_hole_dia")[0].value),
            "Number_Holes_Grain"     : parseInt(document.getElementsByName("prop_nhg")[0].value),
            "Web_Size"               : parseFloat(document.getElementsByName("prop_web_size")[0].value),
            "Burn_Rate"              : parseFloat(document.getElementsByName("prop_burn_rate")[0].value)
        };
        input_json["Dynamics"] =      {
            "Pressure_Exponent"      : parseFloat(document.getElementsByName("dyanmics_PE")[0].value),
            "Mass_Recoiling"         : parseInt(document.getElementsByName("dyanmics_mass_rec")[0].value),
            "Shot_Start_Pressure"    : parseInt(document.getElementsByName("dyanmics_ssp")[0].value)
        };
        input_json["Constants"] =  {
            "Atmospheric_Pressure"          : 101325.0,
            "Speed_Sound_Ambient"           : 347.19,
            "Temperature_Barrel"            : 1000.0,
            "Specific_Covolume"             : 0.001,
            "Fraction_Friction_Loss"        : 0.05,
            "Time_Step"                     : 1e-6,
            "Universal_Gas_Constant"        : 8.314
        };
        return input_json;
}