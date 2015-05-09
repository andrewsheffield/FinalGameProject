#pragma strict


function OnClick () {

		
		ship_control.health = 				UpgradeValues.health;
		torpedo_controller.torp_damage = 	UpgradeValues.damage;
		ship_control.fireRate = 			UpgradeValues.fireRate;
		
		Application.LoadLevel("mainGame");


}