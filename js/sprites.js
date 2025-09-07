// Sprite definitions using SVG
const sprites = {
    chicken: `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Chicken head -->
            <rect x="35" y="10" width="30" height="25" fill="#FFFFFF"/>
            <rect x="30" y="15" width="40" height="15" fill="#F0F0F0"/>
            <!-- Beak -->
            <rect x="25" y="20" width="10" height="8" fill="#FFA500"/>
            <rect x="20" y="22" width="8" height="4" fill="#FF8C00"/>
            <!-- Eye -->
            <rect x="47" y="18" width="6" height="6" fill="#000000"/>
            <rect x="49" y="20" width="2" height="2" fill="#FFFFFF"/>
            <!-- Comb (red crest on top) -->
            <rect x="42" y="5" width="6" height="8" fill="#DC143C"/>
            <rect x="48" y="3" width="6" height="10" fill="#DC143C"/>
            <rect x="54" y="5" width="6" height="8" fill="#DC143C"/>
            <!-- Wattles (red things under beak) -->
            <rect x="30" y="28" width="4" height="6" fill="#DC143C"/>
            <rect x="66" y="28" width="4" height="6" fill="#DC143C"/>
            <!-- Body -->
            <rect x="25" y="35" width="50" height="30" fill="#FFFFFF"/>
            <rect x="20" y="40" width="60" height="20" fill="#F5F5F5"/>
            <!-- Wings -->
            <rect x="15" y="42" width="15" height="16" fill="#E0E0E0"/>
            <rect x="70" y="42" width="15" height="16" fill="#E0E0E0"/>
            <!-- Tail feathers -->
            <rect x="75" y="35" width="20" height="25" fill="#DCDCDC"/>
            <rect x="80" y="30" width="15" height="20" fill="#FFFFFF"/>
            <!-- Legs -->
            <rect x="38" y="65" width="6" height="12" fill="#FFA500"/>
            <rect x="56" y="65" width="6" height="12" fill="#FFA500"/>
            <!-- Feet -->
            <rect x="32" y="75" width="18" height="4" fill="#FF8C00"/>
            <rect x="50" y="75" width="18" height="4" fill="#FF8C00"/>
        </svg>
    `,
    zombie: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#7cb518"/>
            <rect x="12" y="8" width="36" height="19" fill="#6ca017"/>
            <!-- Face -->
            <rect x="20" y="12" width="6" height="6" fill="#000"/>
            <rect x="34" y="12" width="6" height="6" fill="#000"/>
            <rect x="22" y="14" width="2" height="2" fill="#ff0000"/>
            <rect x="36" y="14" width="2" height="2" fill="#ff0000"/>
            <rect x="24" y="20" width="12" height="4" fill="#654321"/>
            <rect x="26" y="22" width="2" height="2" fill="#fff"/>
            <rect x="30" y="22" width="2" height="2" fill="#fff"/>
            <rect x="34" y="22" width="2" height="2" fill="#fff"/>
            <!-- Body -->
            <rect x="18" y="30" width="24" height="20" fill="#3366cc"/>
            <rect x="15" y="33" width="30" height="14" fill="#2d5ab8"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#7cb518"/>
            <rect x="42" y="32" width="12" height="18" fill="#7cb518"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#654321"/>
            <rect x="32" y="50" width="8" height="10" fill="#654321"/>
        </svg>
    `,
    creeper: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Body -->
            <rect x="15" y="10" width="30" height="50" fill="#0da70b"/>
            <rect x="12" y="12" width="36" height="46" fill="#0b8f09"/>
            <!-- Face -->
            <rect x="18" y="16" width="6" height="6" fill="#000"/>
            <rect x="36" y="16" width="6" height="6" fill="#000"/>
            <rect x="20" y="18" width="2" height="2" fill="#333"/>
            <rect x="38" y="18" width="2" height="2" fill="#333"/>
            <!-- Mouth pattern -->
            <rect x="24" y="24" width="6" height="6" fill="#000"/>
            <rect x="30" y="24" width="6" height="6" fill="#000"/>
            <rect x="27" y="30" width="6" height="10" fill="#000"/>
            <!-- Texture details -->
            <rect x="18" y="40" width="6" height="2" fill="#085c07"/>
            <rect x="36" y="40" width="6" height="2" fill="#085c07"/>
            <rect x="24" y="45" width="12" height="2" fill="#085c07"/>
            <!-- Legs -->
            <rect x="12" y="50" width="12" height="10" fill="#0da70b"/>
            <rect x="36" y="50" width="12" height="10" fill="#0da70b"/>
        </svg>
    `,
    skeleton: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="18" y="5" width="24" height="20" fill="#f5f5dc"/>
            <rect x="15" y="8" width="30" height="14" fill="#ede5c8"/>
            <!-- Face -->
            <rect x="22" y="12" width="4" height="6" fill="#000"/>
            <rect x="34" y="12" width="4" height="6" fill="#000"/>
            <rect x="24" y="14" width="2" height="2" fill="#333"/>
            <rect x="36" y="14" width="2" height="2" fill="#333"/>
            <rect x="26" y="18" width="8" height="3" fill="#000"/>
            <rect x="28" y="19" width="1" height="1" fill="#f5f5dc"/>
            <rect x="31" y="19" width="1" height="1" fill="#f5f5dc"/>
            <!-- Body -->
            <rect x="21" y="25" width="18" height="25" fill="#ddd"/>
            <rect x="18" y="28" width="24" height="19" fill="#ccc"/>
            <!-- Ribs -->
            <rect x="24" y="30" width="12" height="2" fill="#aaa"/>
            <rect x="24" y="34" width="12" height="2" fill="#aaa"/>
            <rect x="24" y="38" width="12" height="2" fill="#aaa"/>
            <!-- Arms -->
            <rect x="9" y="27" width="12" height="15" fill="#ddd"/>
            <rect x="39" y="27" width="12" height="15" fill="#ddd"/>
            <!-- Legs -->
            <rect x="22" y="50" width="6" height="10" fill="#ddd"/>
            <rect x="32" y="50" width="6" height="10" fill="#ddd"/>
        </svg>
    `,
    witch: `
        <svg width="90" height="90" viewBox="0 0 90 90">
            <!-- Hat -->
            <rect x="30" y="0" width="30" height="25" fill="#654321"/>
            <rect x="25" y="20" width="40" height="8" fill="#654321"/>
            <rect x="50" y="0" width="15" height="5" fill="#8B4513"/>
            <!-- Head -->
            <rect x="25" y="20" width="40" height="30" fill="#228B22"/>
            <rect x="20" y="25" width="50" height="20" fill="#32CD32"/>
            <!-- Eyes -->
            <rect x="32" y="30" width="6" height="8" fill="#000"/>
            <rect x="52" y="30" width="6" height="8" fill="#000"/>
            <rect x="34" y="32" width="2" height="4" fill="#ff0000"/>
            <rect x="54" y="32" width="2" height="4" fill="#ff0000"/>
            <!-- Nose -->
            <rect x="42" y="36" width="6" height="10" fill="#32CD32"/>
            <rect x="44" y="38" width="4" height="6" fill="#228B22"/>
            <!-- Mouth -->
            <rect x="38" y="44" width="14" height="4" fill="#000"/>
            <rect x="40" y="46" width="2" height="2" fill="#fff"/>
            <rect x="48" y="46" width="2" height="2" fill="#fff"/>
            <!-- Body -->
            <rect x="25" y="50" width="40" height="40" fill="#8A2BE2"/>
            <rect x="20" y="55" width="50" height="30" fill="#9932CC"/>
            <!-- Arms -->
            <rect x="5" y="55" width="20" height="25" fill="#228B22"/>
            <rect x="65" y="55" width="20" height="25" fill="#228B22"/>
            <!-- Cauldron -->
            <rect x="70" y="70" width="15" height="12" fill="#2F4F4F"/>
            <rect x="72" y="72" width="11" height="8" fill="#00FF00" opacity="0.7"/>
        </svg>
    `,
    evoker: `
        <svg width="90" height="90" viewBox="0 0 90 90">
            <!-- Hood -->
            <rect x="20" y="5" width="50" height="40" fill="#4B0082"/>
            <rect x="15" y="10" width="60" height="30" fill="#6A0DAD"/>
            <!-- Face (partially hidden) -->
            <rect x="35" y="25" width="20" height="20" fill="#F5DEB3"/>
            <rect x="30" y="30" width="30" height="10" fill="#DDD"/>
            <!-- Eyes (glowing) -->
            <rect x="38" y="32" width="4" height="6" fill="#00FFFF"/>
            <rect x="48" y="32" width="4" height="6" fill="#00FFFF"/>
            <rect x="39" y="33" width="2" height="4" fill="#FFFFFF"/>
            <rect x="49" y="33" width="2" height="4" fill="#FFFFFF"/>
            <!-- Body -->
            <rect x="25" y="45" width="40" height="45" fill="#4B0082"/>
            <rect x="20" y="50" width="50" height="35" fill="#6A0DAD"/>
            <!-- Robe details -->
            <rect x="30" y="55" width="30" height="3" fill="#FFD700"/>
            <rect x="32" y="65" width="26" height="2" fill="#FFD700"/>
            <rect x="34" y="75" width="22" height="2" fill="#FFD700"/>
            <!-- Arms -->
            <rect x="5" y="50" width="20" height="30" fill="#4B0082"/>
            <rect x="65" y="50" width="20" height="30" fill="#4B0082"/>
            <!-- Staff -->
            <rect x="85" y="20" width="3" height="50" fill="#8B4513"/>
            <rect x="82" y="18" width="9" height="6" fill="#FFD700"/>
            <!-- Magic particles -->
            <rect x="10" y="15" width="3" height="3" fill="#FF00FF" opacity="0.8"/>
            <rect x="75" y="25" width="3" height="3" fill="#00FFFF" opacity="0.8"/>
            <rect x="15" y="35" width="2" height="2" fill="#FFD700" opacity="0.8"/>
        </svg>
    `,
    ravager: `
        <svg width="120" height="90" viewBox="0 0 120 90">
            <!-- Head -->
            <rect x="30" y="10" width="60" height="35" fill="#696969"/>
            <rect x="25" y="15" width="70" height="25" fill="#808080"/>
            <!-- Horns -->
            <rect x="20" y="5" width="8" height="20" fill="#2F2F2F"/>
            <rect x="92" y="5" width="8" height="20" fill="#2F2F2F"/>
            <rect x="18" y="3" width="4" height="10" fill="#1C1C1C"/>
            <rect x="98" y="3" width="4" height="10" fill="#1C1C1C"/>
            <!-- Eyes -->
            <rect x="40" y="22" width="8" height="10" fill="#ff0000"/>
            <rect x="72" y="22" width="8" height="10" fill="#ff0000"/>
            <rect x="42" y="24" width="4" height="6" fill="#FFFF00"/>
            <rect x="74" y="24" width="4" height="6" fill="#FFFF00"/>
            <!-- Mouth -->
            <rect x="50" y="32" width="20" height="8" fill="#000"/>
            <rect x="48" y="34" width="4" height="4" fill="#fff"/>
            <rect x="68" y="34" width="4" height="4" fill="#fff"/>
            <!-- Body -->
            <rect x="20" y="45" width="80" height="35" fill="#696969"/>
            <rect x="15" y="50" width="90" height="25" fill="#808080"/>
            <!-- Legs -->
            <rect x="25" y="75" width="15" height="15" fill="#2F2F2F"/>
            <rect x="50" y="75" width="15" height="15" fill="#2F2F2F"/>
            <rect x="70" y="75" width="15" height="15" fill="#2F2F2F"/>
            <rect x="95" y="75" width="15" height="15" fill="#2F2F2F"/>
            <!-- Saddle -->
            <rect x="35" y="45" width="50" height="8" fill="#8B4513"/>
            <rect x="40" y="40" width="40" height="5" fill="#654321"/>
            <!-- Armor spikes -->
            <rect x="30" y="38" width="5" height="10" fill="#2F2F2F"/>
            <rect x="85" y="38" width="5" height="10" fill="#2F2F2F"/>
        </svg>
    `,
    warden: `
        <svg width="100" height="120" viewBox="0 0 100 120">
            <!-- Head -->
            <rect x="20" y="10" width="60" height="40" fill="#0F0F23"/>
            <rect x="15" y="15" width="70" height="30" fill="#1C1C3A"/>
            <!-- Horns/Antlers -->
            <rect x="10" y="5" width="6" height="25" fill="#36454F"/>
            <rect x="84" y="5" width="6" height="25" fill="#36454F"/>
            <rect x="8" y="0" width="10" height="12" fill="#2F4F4F"/>
            <rect x="82" y="0" width="10" height="12" fill="#2F4F4F"/>
            <!-- Glowing heart -->
            <rect x="40" y="25" width="20" height="15" fill="#00FFFF"/>
            <rect x="42" y="27" width="16" height="11" fill="#87CEEB"/>
            <rect x="45" y="30" width="10" height="5" fill="#FFFFFF"/>
            <!-- Soul fire effects -->
            <rect x="25" y="20" width="3" height="6" fill="#00FFFF" opacity="0.7"/>
            <rect x="72" y="22" width="3" height="6" fill="#00FFFF" opacity="0.7"/>
            <rect x="35" y="15" width="2" height="4" fill="#87CEEB" opacity="0.8"/>
            <rect x="63" y="18" width="2" height="4" fill="#87CEEB" opacity="0.8"/>
            <!-- Body -->
            <rect x="15" y="50" width="70" height="50" fill="#0F0F23"/>
            <rect x="10" y="55" width="80" height="40" fill="#1C1C3A"/>
            <!-- Chest sculk -->
            <rect x="35" y="60" width="30" height="25" fill="#36454F"/>
            <rect x="38" y="63" width="24" height="19" fill="#4682B4"/>
            <rect x="42" y="67" width="16" height="11" fill="#00FFFF" opacity="0.6"/>
            <!-- Arms -->
            <rect x="0" y="55" width="15" height="40" fill="#0F0F23"/>
            <rect x="85" y="55" width="15" height="40" fill="#0F0F23"/>
            <!-- Legs -->
            <rect x="25" y="100" width="18" height="20" fill="#0F0F23"/>
            <rect x="57" y="100" width="18" height="20" fill="#0F0F23"/>
            <!-- Sculk tendrils -->
            <rect x="5" y="45" width="4" height="15" fill="#36454F"/>
            <rect x="91" y="48" width="4" height="15" fill="#36454F"/>
            <rect x="45" y="45" width="10" height="3" fill="#4682B4" opacity="0.7"/>
        </svg>
    `,
    egg: `
        <svg width="16" height="24" viewBox="0 0 16 24">
            <!-- Egg body -->
            <rect x="4" y="4" width="8" height="16" fill="#F5F5DC"/>
            <rect x="3" y="6" width="10" height="12" fill="#FFFEF7"/>
            <rect x="5" y="2" width="6" height="4" fill="#F0F0F0"/>
            <rect x="5" y="18" width="6" height="4" fill="#F0F0F0"/>
            <!-- Egg highlights -->
            <rect x="6" y="6" width="4" height="8" fill="#FFFFFF" opacity="0.6"/>
            <rect x="7" y="8" width="2" height="4" fill="#FFFFFF" opacity="0.8"/>
            <!-- Small speckles -->
            <rect x="5" y="10" width="1" height="1" fill="#DDD"/>
            <rect x="10" y="12" width="1" height="1" fill="#DDD"/>
            <rect x="7" y="14" width="1" height="1" fill="#DDD"/>
        </svg>
    `,
    snowball: `
        <svg width="20" height="20" viewBox="0 0 20 20">
            <rect x="4" y="4" width="12" height="12" fill="#ffffff"/>
            <rect x="6" y="2" width="8" height="8" fill="#f0f0f0"/>
            <rect x="2" y="6" width="8" height="8" fill="#f0f0f0"/>
            <rect x="10" y="6" width="8" height="8" fill="#f0f0f0"/>
            <rect x="6" y="10" width="8" height="8" fill="#f0f0f0"/>
            <!-- Snow texture -->
            <rect x="8" y="8" width="4" height="4" fill="#e8e8e8"/>
            <rect x="6" y="6" width="2" height="2" fill="#ddd"/>
            <rect x="12" y="12" width="2" height="2" fill="#ddd"/>
        </svg>
    `,
    
    blue_ender_pearl: `
        <svg width="18" height="18" viewBox="0 0 18 18">
            <!-- Core pearl -->
            <circle cx="9" cy="9" r="7" fill="#0080FF"/>
            <circle cx="9" cy="9" r="5" fill="#4DA6FF"/>
            <circle cx="9" cy="9" r="3" fill="#80BFFF"/>
            <!-- Glowing effect -->
            <circle cx="9" cy="9" r="8" fill="#00CCFF" opacity="0.3"/>
            <!-- Sparkle points -->
            <rect x="6" y="6" width="1" height="1" fill="#E0FFFF"/>
            <rect x="11" y="7" width="1" height="1" fill="#E0FFFF"/>
            <rect x="7" y="11" width="1" height="1" fill="#E0FFFF"/>
            <rect x="12" y="11" width="1" height="1" fill="#E0FFFF"/>
        </svg>
    `,
    diamondSword: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="18" y="4" width="4" height="24" fill="#8B4513"/>
            <rect x="16" y="28" width="8" height="4" fill="#654321"/>
            <rect x="14" y="2" width="12" height="20" fill="#87CEEB"/>
            <rect x="16" y="0" width="8" height="4" fill="#B0E0E6"/>
            <rect x="18" y="6" width="4" height="12" fill="#E0FFFF"/>
        </svg>
    `,
    goldenApple: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="16" y="8" width="8" height="24" fill="#FFD700"/>
            <rect x="12" y="12" width="16" height="16" fill="#FFA500"/>
            <rect x="18" y="4" width="4" height="8" fill="#228B22"/>
            <rect x="14" y="14" width="12" height="12" fill="#FFFF00" opacity="0.7"/>
            <rect x="20" y="10" width="4" height="4" fill="#ADFF2F"/>
        </svg>
    `,
    enderPearl: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="12" y="12" width="16" height="16" fill="#2F2F4F"/>
            <rect x="14" y="10" width="12" height="20" fill="#483D8B"/>
            <rect x="16" y="8" width="8" height="24" fill="#6A5ACD"/>
            <rect x="18" y="14" width="4" height="12" fill="#9370DB" opacity="0.8"/>
            <rect x="10" y="18" width="2" height="2" fill="#DDA0DD" opacity="0.6"/>
            <rect x="28" y="22" width="2" height="2" fill="#DDA0DD" opacity="0.6"/>
        </svg>
    `,
    fireball: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <!-- Core fire -->
            <circle cx="20" cy="20" r="16" fill="#FF4500"/>
            <circle cx="20" cy="20" r="12" fill="#FF6600"/>
            <circle cx="20" cy="20" r="8" fill="#FF8800"/>
            <circle cx="20" cy="20" r="4" fill="#FFAA00"/>
            <!-- Fire particles -->
            <circle cx="15" cy="10" r="2" fill="#FF4500" opacity="0.8"/>
            <circle cx="25" cy="8" r="1.5" fill="#FF6600" opacity="0.7"/>
            <circle cx="30" cy="15" r="2" fill="#FF4500" opacity="0.6"/>
            <circle cx="8" cy="25" r="1.5" fill="#FF8800" opacity="0.7"/>
            <circle cx="32" cy="30" r="1" fill="#FFAA00" opacity="0.8"/>
            <!-- Hot center -->
            <circle cx="20" cy="20" r="2" fill="#FFFFFF" opacity="0.9"/>
        </svg>
    `,
    firePotion: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="14" y="8" width="12" height="24" fill="#8B4513"/>
            <rect x="16" y="10" width="8" height="20" fill="#FF4500"/>
            <rect x="18" y="12" width="4" height="16" fill="#FF6347"/>
            <rect x="16" y="4" width="8" height="8" fill="#696969"/>
            <rect x="18" y="6" width="4" height="4" fill="#A9A9A9"/>
            <rect x="20" y="14" width="2" height="2" fill="#FFFF00" opacity="0.8"/>
        </svg>
    `,
    totem: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="16" y="8" width="8" height="24" fill="#FFD700"/>
            <rect x="12" y="12" width="16" height="16" fill="#FFA500"/>
            <rect x="14" y="4" width="12" height="8" fill="#32CD32"/>
            <rect x="18" y="2" width="4" height="6" fill="#228B22"/>
            <rect x="18" y="14" width="4" height="12" fill="#FFFF00" opacity="0.7"/>
            <rect x="10" y="16" width="4" height="8" fill="#FFD700"/>
            <rect x="26" y="16" width="4" height="8" fill="#FFD700"/>
        </svg>
    `,
    redstone: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="14" y="14" width="12" height="12" fill="#DC143C"/>
            <rect x="16" y="12" width="8" height="16" fill="#FF0000"/>
            <rect x="12" y="16" width="16" height="8" fill="#B22222"/>
            <rect x="18" y="18" width="4" height="4" fill="#FF6347" opacity="0.8"/>
            <rect x="8" y="20" width="2" height="2" fill="#FF0000" opacity="0.6"/>
            <rect x="30" y="18" width="2" height="2" fill="#FF0000" opacity="0.6"/>
            <rect x="20" y="8" width="2" height="2" fill="#FF0000" opacity="0.6"/>
        </svg>
    `,
    tnt: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="8" y="8" width="24" height="24" fill="#DC143C"/>
            <rect x="10" y="10" width="20" height="20" fill="#FF0000"/>
            <rect x="12" y="12" width="16" height="16" fill="#8B0000"/>
            <rect x="14" y="18" width="12" height="4" fill="#FFFFFF"/>
            <rect x="18" y="14" width="4" height="12" fill="#FFFFFF"/>
            <rect x="16" y="4" width="8" height="8" fill="#228B22"/>
            <rect x="20" y="2" width="2" height="6" fill="#000000"/>
        </svg>
    `,
    blazeRod: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="18" y="4" width="4" height="32" fill="#8B4513"/>
            <rect x="16" y="6" width="8" height="28" fill="#DAA520"/>
            <rect x="14" y="8" width="12" height="24" fill="#FF8C00"/>
            <rect x="16" y="10" width="8" height="20" fill="#FF4500"/>
            <rect x="18" y="12" width="4" height="16" fill="#FF0000"/>
            <!-- Fire particles -->
            <rect x="12" y="14" width="2" height="2" fill="#FFD700" opacity="0.8"/>
            <rect x="26" y="18" width="2" height="2" fill="#FFD700" opacity="0.8"/>
            <rect x="10" y="22" width="2" height="2" fill="#FF6347" opacity="0.7"/>
            <rect x="28" y="26" width="2" height="2" fill="#FF6347" opacity="0.7"/>
        </svg>
    `,
    stevesLavaChicken: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <!-- Lava Chicken Body -->
            <rect x="10" y="15" width="20" height="15" fill="#FF4500"/>
            <rect x="8" y="17" width="24" height="11" fill="#FF6347"/>
            <!-- Chicken Head -->
            <rect x="14" y="8" width="12" height="10" fill="#FFD700"/>
            <rect x="12" y="10" width="16" height="6" fill="#FFA500"/>
            <!-- Lava Eyes -->
            <rect x="16" y="11" width="2" height="2" fill="#FF0000"/>
            <rect x="22" y="11" width="2" height="2" fill="#FF0000"/>
            <!-- Molten Beak -->
            <rect x="10" y="12" width="4" height="3" fill="#FF8C00"/>
            <!-- Lava Comb -->
            <rect x="16" y="4" width="2" height="6" fill="#DC143C"/>
            <rect x="18" y="2" width="2" height="8" fill="#DC143C"/>
            <rect x="20" y="4" width="2" height="6" fill="#DC143C"/>
            <!-- Molten Wings -->
            <rect x="6" y="18" width="6" height="8" fill="#FF8C00"/>
            <rect x="28" y="18" width="6" height="8" fill="#FF8C00"/>
            <!-- Lava Tail -->
            <rect x="30" y="15" width="8" height="10" fill="#FF4500"/>
            <rect x="32" y="12" width="6" height="8" fill="#FFD700"/>
            <!-- Lava Legs -->
            <rect x="15" y="30" width="3" height="6" fill="#8B4513"/>
            <rect x="22" y="30" width="3" height="6" fill="#8B4513"/>
            <!-- Lava Feet -->
            <rect x="13" y="35" width="7" height="2" fill="#FF8C00"/>
            <rect x="20" y="35" width="7" height="2" fill="#FF8C00"/>
            <!-- Lava Particles -->
            <rect x="5" y="8" width="1" height="1" fill="#FF0000" opacity="0.8"/>
            <rect x="34" y="10" width="1" height="1" fill="#FF0000" opacity="0.8"/>
            <rect x="8" y="25" width="1" height="1" fill="#FFD700" opacity="0.7"/>
            <rect x="31" y="28" width="1" height="1" fill="#FFD700" opacity="0.7"/>
        </svg>
    `,
    tractorBeam: `
        <svg width="60" height="100" viewBox="0 0 60 100">
            <!-- Tractor beam effect -->
            <rect x="10" y="0" width="40" height="20" fill="#9370DB" opacity="0.3"/>
            <rect x="8" y="20" width="44" height="20" fill="#8A2BE2" opacity="0.3"/>
            <rect x="6" y="40" width="48" height="20" fill="#9932CC" opacity="0.3"/>
            <rect x="4" y="60" width="52" height="20" fill="#BA55D3" opacity="0.3"/>
            <rect x="2" y="80" width="56" height="20" fill="#DDA0DD" opacity="0.3"/>
            <!-- Beam particles -->
            <rect x="15" y="10" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="43" y="25" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="20" y="45" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="35" y="65" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="28" y="85" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
        </svg>
    `,
    fireSpread: `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <rect x="8" y="4" width="8" height="16" fill="#FF4500"/>
            <rect x="6" y="6" width="12" height="12" fill="#FF6347"/>
            <rect x="4" y="8" width="16" height="8" fill="#FF8C00"/>
            <rect x="10" y="2" width="4" height="20" fill="#FFD700"/>
            <rect x="12" y="0" width="2" height="24" fill="#FFFF00" opacity="0.8"/>
            <!-- Animated flicker effect -->
            <rect x="2" y="10" width="2" height="4" fill="#FF0000" opacity="0.6"/>
            <rect x="20" y="8" width="2" height="6" fill="#FF0000" opacity="0.6"/>
        </svg>
    `,
    shield: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <!-- Shield Base -->
            <path d="M20 2 L30 10 L30 25 L20 38 L10 25 L10 10 Z" fill="#4A90E2" stroke="#2C5A80" stroke-width="2"/>
            <!-- Shield Highlight -->
            <path d="M20 4 L28 11 L28 24 L20 35 L12 24 L12 11 Z" fill="#5BA0F2" opacity="0.8"/>
            <!-- Shield Center Gem -->
            <circle cx="20" cy="18" r="4" fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
            <!-- Shield Decorative Lines -->
            <line x1="15" y1="12" x2="25" y2="12" stroke="#FFFFFF" stroke-width="1" opacity="0.6"/>
            <line x1="14" y1="16" x2="26" y2="16" stroke="#FFFFFF" stroke-width="1" opacity="0.4"/>
            <line x1="14" y1="24" x2="26" y2="24" stroke="#FFFFFF" stroke-width="1" opacity="0.4"/>
            <!-- Shield Glow Effect -->
            <path d="M20 2 L30 10 L30 25 L20 38 L10 25 L10 10 Z" fill="none" stroke="#87CEEB" stroke-width="1" opacity="0.7"/>
        </svg>
    `,
    iceBlock: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <!-- Ice Block Base -->
            <rect x="6" y="6" width="28" height="28" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
            <!-- Ice Block Highlight -->
            <rect x="8" y="8" width="24" height="24" fill="#E0F6FF" opacity="0.8"/>
            <!-- Ice Crystals -->
            <polygon points="20,10 22,14 18,14" fill="#FFFFFF" opacity="0.9"/>
            <polygon points="20,30 22,26 18,26" fill="#FFFFFF" opacity="0.9"/>
            <polygon points="10,20 14,22 14,18" fill="#FFFFFF" opacity="0.9"/>
            <polygon points="30,20 26,22 26,18" fill="#FFFFFF" opacity="0.9"/>
            <!-- Ice Sparkles -->
            <circle cx="15" cy="15" r="1" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="25" cy="15" r="1" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="15" cy="25" r="1" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="25" cy="25" r="1" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" opacity="1"/>
            <!-- Ice Shine Effect -->
            <rect x="10" y="8" width="4" height="2" fill="#FFFFFF" opacity="0.6"/>
            <rect x="26" y="12" width="2" height="4" fill="#FFFFFF" opacity="0.6"/>
        </svg>
    `,
    windCharge: `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <!-- Wind charge core -->
            <circle cx="12" cy="12" r="8" fill="#87CEEB" opacity="0.7"/>
            <circle cx="12" cy="12" r="6" fill="#B0E0E6" opacity="0.8"/>
            <circle cx="12" cy="12" r="4" fill="#E0F6FF" opacity="0.9"/>
            
            <!-- Wind swirls -->
            <path d="M6 8 Q12 4, 18 8 Q12 12, 6 8" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.8"/>
            <path d="M6 16 Q12 20, 18 16 Q12 12, 6 16" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.8"/>
            <path d="M8 6 Q4 12, 8 18 Q12 12, 8 6" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.7"/>
            <path d="M16 6 Q20 12, 16 18 Q12 12, 16 6" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.7"/>
            
            <!-- Center vortex -->
            <circle cx="12" cy="12" r="2" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="12" cy="12" r="1" fill="#4682B4" opacity="0.9"/>
            
            <!-- Wind particles -->
            <circle cx="6" cy="6" r="1" fill="#87CEEB" opacity="0.6"/>
            <circle cx="18" cy="6" r="1" fill="#87CEEB" opacity="0.6"/>
            <circle cx="6" cy="18" r="1" fill="#87CEEB" opacity="0.6"/>
            <circle cx="18" cy="18" r="1" fill="#87CEEB" opacity="0.6"/>
        </svg>
    `,
    tornado: `
        <svg width="40" height="80" viewBox="0 0 40 80">
            <!-- Tornado base (wide) -->
            <ellipse cx="20" cy="75" rx="18" ry="4" fill="#D3D3D3" opacity="0.6"/>
            
            <!-- Tornado funnel -->
            <path d="M2 75 Q10 65, 8 55 Q15 45, 12 35 Q18 25, 15 15 Q22 5, 20 0 Q18 5, 25 15 Q22 25, 28 35 Q25 45, 32 55 Q30 65, 38 75" fill="#B0C4DE" opacity="0.7"/>
            
            <!-- Inner tornado swirl -->
            <path d="M8 70 Q15 60, 12 50 Q18 40, 15 30 Q20 20, 18 10 Q22 15, 25 25 Q22 35, 28 45 Q25 55, 32 65" fill="#778899" opacity="0.6"/>
            
            <!-- Debris particles -->
            <rect x="5" y="60" width="2" height="2" fill="#8B4513" opacity="0.8"/>
            <rect x="30" y="55" width="2" height="2" fill="#654321" opacity="0.8"/>
            <rect x="12" y="45" width="1" height="1" fill="#696969" opacity="0.7"/>
            <rect x="25" y="40" width="1" height="1" fill="#696969" opacity="0.7"/>
            <rect x="8" y="35" width="1" height="1" fill="#8B4513" opacity="0.6"/>
            <rect x="28" y="30" width="1" height="1" fill="#654321" opacity="0.6"/>
            <rect x="15" y="25" width="1" height="1" fill="#696969" opacity="0.5"/>
            <rect x="22" y="20" width="1" height="1" fill="#696969" opacity="0.5"/>
            
            <!-- Wind lines for motion -->
            <path d="M0 70 Q5 68, 10 70" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.4"/>
            <path d="M30 65 Q35 63, 40 65" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.4"/>
            <path d="M2 50 Q7 48, 12 50" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.3"/>
            <path d="M28 45 Q33 43, 38 45" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.3"/>
        </svg>
    `,
    piglin: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#F4A460"/>
            <rect x="12" y="8" width="36" height="19" fill="#DEB887"/>
            <!-- Snout -->
            <rect x="24" y="18" width="12" height="8" fill="#D2691E"/>
            <rect x="26" y="20" width="2" height="2" fill="#000"/>
            <rect x="32" y="20" width="2" height="2" fill="#000"/>
            <!-- Eyes -->
            <rect x="20" y="12" width="6" height="6" fill="#FF4500"/>
            <rect x="34" y="12" width="6" height="6" fill="#FF4500"/>
            <rect x="22" y="14" width="2" height="2" fill="#000"/>
            <rect x="36" y="14" width="2" height="2" fill="#000"/>
            <!-- Ears -->
            <rect x="10" y="10" width="8" height="12" fill="#F4A460"/>
            <rect x="42" y="10" width="8" height="12" fill="#F4A460"/>
            <!-- Body -->
            <rect x="18" y="30" width="24" height="20" fill="#8B4513"/>
            <rect x="15" y="33" width="30" height="14" fill="#A0522D"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#F4A460"/>
            <rect x="42" y="32" width="12" height="18" fill="#F4A460"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#8B4513"/>
            <rect x="32" y="50" width="8" height="10" fill="#8B4513"/>
        </svg>
    `,
    zombie_piglin: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#228B22"/>
            <rect x="12" y="8" width="36" height="19" fill="#32CD32"/>
            <!-- Snout -->
            <rect x="24" y="18" width="12" height="8" fill="#8B4513"/>
            <rect x="26" y="20" width="2" height="2" fill="#000"/>
            <rect x="32" y="20" width="2" height="2" fill="#000"/>
            <!-- Eyes -->
            <rect x="20" y="12" width="6" height="6" fill="#8B0000"/>
            <rect x="34" y="12" width="6" height="6" fill="#8B0000"/>
            <rect x="22" y="14" width="2" height="2" fill="#FF0000"/>
            <rect x="36" y="14" width="2" height="2" fill="#FF0000"/>
            <!-- Ears -->
            <rect x="10" y="10" width="8" height="12" fill="#228B22"/>
            <rect x="42" y="10" width="8" height="12" fill="#228B22"/>
            <!-- Body -->
            <rect x="18" y="30" width="24" height="20" fill="#8B4513"/>
            <rect x="15" y="33" width="30" height="14" fill="#A0522D"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#228B22"/>
            <rect x="42" y="32" width="12" height="18" fill="#228B22"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#8B4513"/>
            <rect x="32" y="50" width="8" height="10" fill="#8B4513"/>
            <!-- Rotting effects -->
            <rect x="18" y="40" width="6" height="2" fill="#654321"/>
            <rect x="36" y="42" width="6" height="2" fill="#654321"/>
        </svg>
    `,
    wither_skeleton: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="18" y="5" width="24" height="20" fill="#2F2F2F"/>
            <rect x="15" y="8" width="30" height="14" fill="#1C1C1C"/>
            <!-- Face -->
            <rect x="22" y="12" width="4" height="6" fill="#8B0000"/>
            <rect x="34" y="12" width="4" height="6" fill="#8B0000"/>
            <rect x="24" y="14" width="2" height="2" fill="#FF0000"/>
            <rect x="36" y="14" width="2" height="2" fill="#FF0000"/>
            <rect x="26" y="18" width="8" height="3" fill="#8B0000"/>
            <rect x="28" y="19" width="1" height="1" fill="#000"/>
            <rect x="31" y="19" width="1" height="1" fill="#000"/>
            <!-- Body -->
            <rect x="21" y="25" width="18" height="25" fill="#404040"/>
            <rect x="18" y="28" width="24" height="19" fill="#2F2F2F"/>
            <!-- Arms -->
            <rect x="9" y="30" width="12" height="18" fill="#2F2F2F"/>
            <rect x="39" y="30" width="12" height="18" fill="#2F2F2F"/>
            <!-- Legs -->
            <rect x="21" y="50" width="8" height="10" fill="#404040"/>
            <rect x="31" y="50" width="8" height="10" fill="#404040"/>
            <!-- Sword -->
            <rect x="3" y="25" width="4" height="20" fill="#C0C0C0"/>
            <rect x="1" y="20" width="8" height="8" fill="#8B4513"/>
        </svg>
    `,
    blaze: `
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Main body -->
            <rect x="30" y="20" width="20" height="40" fill="#FFAA00"/>
            <rect x="25" y="25" width="30" height="30" fill="#FF8800"/>
            <!-- Fire rods rotating around -->
            <rect x="15" y="15" width="4" height="20" fill="#FF4500" transform="rotate(45 17 25)"/>
            <rect x="61" y="15" width="4" height="20" fill="#FF4500" transform="rotate(-45 63 25)"/>
            <rect x="15" y="45" width="4" height="20" fill="#FF4500" transform="rotate(-45 17 55)"/>
            <rect x="61" y="45" width="4" height="20" fill="#FF4500" transform="rotate(45 63 55)"/>
            <rect x="5" y="30" width="4" height="20" fill="#FF6600" transform="rotate(90 7 40)"/>
            <rect x="71" y="30" width="4" height="20" fill="#FF6600" transform="rotate(90 73 40)"/>
            <!-- Face -->
            <rect x="32" y="28" width="4" height="4" fill="#8B0000"/>
            <rect x="44" y="28" width="4" height="4" fill="#8B0000"/>
            <rect x="36" y="36" width="8" height="4" fill="#000"/>
            <!-- Inner fire glow -->
            <rect x="32" y="22" width="16" height="36" fill="#FFFF00" opacity="0.6"/>
            <rect x="35" y="25" width="10" height="30" fill="#FFFFFF" opacity="0.3"/>
        </svg>
    `,
    ghast: `
        <svg width="100" height="100" viewBox="0 0 100 100">
            <!-- Main body -->
            <rect x="10" y="10" width="80" height="60" fill="#F5F5F5"/>
            <rect x="5" y="15" width="90" height="50" fill="#FFFFFF"/>
            <!-- Face -->
            <rect x="25" y="25" width="12" height="12" fill="#000"/>
            <rect x="63" y="25" width="12" height="12" fill="#000"/>
            <rect x="27" y="27" width="8" height="8" fill="#8B0000"/>
            <rect x="65" y="27" width="8" height="8" fill="#8B0000"/>
            <!-- Mouth -->
            <rect x="40" y="45" width="20" height="8" fill="#000"/>
            <rect x="42" y="47" width="4" height="4" fill="#FFFFFF"/>
            <rect x="50" y="47" width="4" height="4" fill="#FFFFFF"/>
            <rect x="58" y="47" width="4" height="4" fill="#FFFFFF"/>
            <!-- Tentacles -->
            <rect x="15" y="70" width="6" height="25" fill="#F0F0F0"/>
            <rect x="25" y="70" width="6" height="20" fill="#F0F0F0"/>
            <rect x="35" y="70" width="6" height="22" fill="#F0F0F0"/>
            <rect x="45" y="70" width="6" height="18" fill="#F0F0F0"/>
            <rect x="55" y="70" width="6" height="24" fill="#F0F0F0"/>
            <rect x="65" y="70" width="6" height="19" fill="#F0F0F0"/>
            <rect x="75" y="70" width="6" height="21" fill="#F0F0F0"/>
            <!-- Floating effect -->
            <rect x="12" y="68" width="76" height="2" fill="#E0E0E0" opacity="0.5"/>
        </svg>
    `,
    wither: `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Main head (center) -->
            <rect x="35" y="5" width="30" height="25" fill="#1C1C1C"/>
            <rect x="32" y="8" width="36" height="19" fill="#000000"/>
            <!-- Side heads -->
            <rect x="10" y="15" width="20" height="18" fill="#1C1C1C"/>
            <rect x="70" y="15" width="20" height="18" fill="#1C1C1C"/>
            <!-- Main head face -->
            <rect x="40" y="12" width="4" height="6" fill="#4169E1"/>
            <rect x="56" y="12" width="4" height="6" fill="#4169E1"/>
            <rect x="44" y="18" width="12" height="4" fill="#4169E1"/>
            <!-- Side heads faces -->
            <rect x="15" y="20" width="3" height="4" fill="#4169E1"/>
            <rect x="22" y="20" width="3" height="4" fill="#4169E1"/>
            <rect x="75" y="20" width="3" height="4" fill="#4169E1"/>
            <rect x="82" y="20" width="3" height="4" fill="#4169E1"/>
            <!-- Body -->
            <rect x="25" y="30" width="50" height="30" fill="#2F2F2F"/>
            <rect x="20" y="35" width="60" height="20" fill="#1C1C1C"/>
            <!-- Ribs -->
            <rect x="30" y="40" width="40" height="2" fill="#696969"/>
            <rect x="30" y="45" width="40" height="2" fill="#696969"/>
            <rect x="30" y="50" width="40" height="2" fill="#696969"/>
            <!-- Spine -->
            <rect x="48" y="60" width="4" height="20" fill="#696969"/>
            <!-- Dark aura effect -->
            <circle cx="50" cy="40" r="45" fill="#000000" opacity="0.1"/>
        </svg>
    `,
    enderman: `
        <svg width="60" height="80" viewBox="0 0 60 80">
            <!-- Head -->
            <rect x="20" y="5" width="20" height="20" fill="#000000"/>
            <rect x="18" y="7" width="24" height="16" fill="#0a0a0a"/>
            <!-- Glowing eyes -->
            <rect x="22" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="34" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="23" y="13" width="2" height="6" fill="#ffffff"/>
            <rect x="35" y="13" width="2" height="6" fill="#ffffff"/>
            <!-- Long neck/body -->
            <rect x="25" y="25" width="10" height="40" fill="#000000"/>
            <rect x="23" y="27" width="14" height="36" fill="#0a0a0a"/>
            <!-- Long arms -->
            <rect x="10" y="30" width="8" height="35" fill="#000000"/>
            <rect x="42" y="30" width="8" height="35" fill="#000000"/>
            <rect x="11" y="32" width="6" height="31" fill="#0a0a0a"/>
            <rect x="43" y="32" width="6" height="31" fill="#0a0a0a"/>
            <!-- Long legs -->
            <rect x="20" y="65" width="8" height="15" fill="#000000"/>
            <rect x="32" y="65" width="8" height="15" fill="#000000"/>
            <rect x="21" y="67" width="6" height="11" fill="#0a0a0a"/>
            <rect x="33" y="67" width="6" height="11" fill="#0a0a0a"/>
            <!-- Teleport particles -->
            <rect x="5" y="15" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="53" y="25" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="8" y="45" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="50" y="55" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="12" y="70" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="46" y="75" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
        </svg>
    `,
    shulker: `
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Main shell body -->
            <rect x="10" y="15" width="60" height="50" fill="#8B4A8B"/>
            <rect x="8" y="17" width="64" height="46" fill="#A569BD"/>
            <!-- Shell ridges -->
            <rect x="12" y="20" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="30" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="40" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="50" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="60" width="56" height="4" fill="#6A3D6A"/>
            <!-- Head when shell is open -->
            <rect x="32" y="5" width="16" height="16" fill="#D7BDE2"/>
            <rect x="30" y="7" width="20" height="12" fill="#E8DAEF"/>
            <!-- Eyes -->
            <rect x="34" y="10" width="3" height="3" fill="#000000"/>
            <rect x="43" y="10" width="3" height="3" fill="#000000"/>
            <!-- Shell opening effect -->
            <rect x="15" y="25" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <rect x="15" y="35" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <rect x="15" y="45" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <rect x="15" y="55" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <!-- Levitation particles -->
            <circle cx="15" cy="12" r="1" fill="#8b00ff" opacity="0.9"/>
            <circle cx="65" cy="18" r="1" fill="#8b00ff" opacity="0.7"/>
            <circle cx="20" cy="70" r="1" fill="#8b00ff" opacity="0.8"/>
            <circle cx="60" cy="72" r="1" fill="#8b00ff" opacity="0.9"/>
        </svg>
    `,
    ender_dragon: `
        <svg width="160" height="120" viewBox="0 0 160 120">
            <!-- Ender energy aura (background) -->
            <circle cx="80" cy="65" r="75" fill="#8b00ff" opacity="0.06"/>
            
            <!-- Right wing (player's right) - BEHIND head -->
            <path d="M150 30 L110 45 L105 65 L110 85 L145 80 L155 55 Z" fill="#0F0F0F"/>
            <path d="M148 33 L112 47 L108 67 L113 82 L142 77 L150 57 Z" fill="#1A1A1A"/>
            <!-- Wing bones -->
            <rect x="140" y="40" width="1" height="35" fill="#404040"/>
            <rect x="130" y="42" width="1" height="38" fill="#404040"/>
            <rect x="120" y="45" width="1" height="35" fill="#404040"/>
            
            <!-- Tail extending from center back position -->
            <rect x="62" y="85" width="26" height="8" fill="#2B2B2B"/>
            <rect x="60" y="87" width="30" height="4" fill="#1A1A1A"/>
            <!-- Tail spikes -->
            <rect x="65" y="82" width="2" height="6" fill="#404040"/>
            <rect x="72" y="80" width="2" height="8" fill="#404040"/>
            <rect x="79" y="82" width="2" height="6" fill="#404040"/>
            <rect x="85" y="84" width="2" height="4" fill="#404040"/>
            
            <!-- Main dragon body (head-on perspective) -->
            <rect x="50" y="62" width="40" height="25" fill="#2B2B2B"/>
            <rect x="48" y="64" width="44" height="21" fill="#1A1A1A"/>
            <rect x="52" y="66" width="36" height="17" fill="#404040"/>
            
            <!-- Body spikes along spine (center line) -->
            <rect x="67" y="58" width="2" height="8" fill="#606060"/>
            <rect x="71" y="56" width="2" height="10" fill="#606060"/>
            <rect x="75" y="56" width="2" height="10" fill="#606060"/>
            <rect x="79" y="58" width="2" height="8" fill="#606060"/>
            
            <!-- Neck connecting body to head -->
            <rect x="85" y="64" width="15" height="18" fill="#2B2B2B"/>
            <rect x="83" y="66" width="19" height="14" fill="#1A1A1A"/>
            
            <!-- Dragon head (front-facing, larger) -->
            <rect x="95" y="48" width="35" height="30" fill="#2B2B2B"/>
            <rect x="93" y="50" width="39" height="26" fill="#1A1A1A"/>
            <rect x="97" y="52" width="31" height="22" fill="#404040"/>
            
            <!-- Snout projecting forward -->
            <rect x="128" y="60" width="18" height="12" fill="#2B2B2B"/>
            <rect x="130" y="62" width="14" height="8" fill="#1A1A1A"/>
            
            <!-- Dragon eyes (glowing purple, front-facing) -->
            <rect x="119" y="58" width="8" height="8" fill="#8b00ff"/>
            <rect x="121" y="60" width="4" height="4" fill="#ffffff"/>
            
            <!-- Dragon horns/spikes on head -->
            <rect x="104" y="42" width="3" height="10" fill="#606060"/>
            <rect x="125" y="42" width="3" height="10" fill="#606060"/>
            <rect x="114" y="38" width="4" height="14" fill="#606060"/>
            
            <!-- Left wing (player's left) - IN FRONT of head -->
            <path d="M10 30 L50 45 L55 65 L50 85 L15 80 L5 55 Z" fill="#0F0F0F"/>
            <path d="M12 33 L48 47 L52 67 L47 82 L18 77 L10 57 Z" fill="#1A1A1A"/>
            <!-- Wing bones -->
            <rect x="20" y="40" width="1" height="35" fill="#404040"/>
            <rect x="30" y="42" width="1" height="38" fill="#404040"/>
            <rect x="40" y="45" width="1" height="35" fill="#404040"/>
            
            <!-- Four legs in proper front perspective -->
            <!-- Front legs (visible, closer to viewer) -->
            <rect x="60" y="82" width="8" height="15" fill="#2B2B2B"/>
            <rect x="100" y="82" width="8" height="15" fill="#2B2B2B"/>
            <!-- Back legs (partially hidden behind front legs) -->
            <rect x="68" y="84" width="6" height="13" fill="#1A1A1A"/>
            <rect x="92" y="84" width="6" height="13" fill="#1A1A1A"/>
            
            <!-- Claws for front legs -->
            <rect x="58" y="95" width="4" height="5" fill="#606060"/>
            <rect x="64" y="95" width="4" height="5" fill="#606060"/>
            <rect x="70" y="95" width="4" height="5" fill="#606060"/>
            
            <rect x="98" y="95" width="4" height="5" fill="#606060"/>
            <rect x="104" y="95" width="4" height="5" fill="#606060"/>
            <rect x="110" y="95" width="4" height="5" fill="#606060"/>
            
            <!-- Claws for back legs (smaller, partially hidden) -->
            <rect x="70" y="95" width="3" height="4" fill="#404040"/>
            <rect x="94" y="95" width="3" height="4" fill="#404040"/>
            
            <!-- Ender particles (foreground) -->
            <circle cx="25" cy="20" r="1.5" fill="#8b00ff" opacity="0.9"/>
            <circle cx="135" cy="18" r="1.5" fill="#8b00ff" opacity="0.8"/>
            <circle cx="15" cy="90" r="1.5" fill="#8b00ff" opacity="0.7"/>
            <circle cx="145" cy="92" r="1.5" fill="#8b00ff" opacity="0.9"/>
            <circle cx="80" cy="10" r="1.5" fill="#8b00ff" opacity="0.8"/>
            <circle cx="40" cy="105" r="1" fill="#8b00ff" opacity="0.6"/>
            <circle cx="120" cy="107" r="1" fill="#8b00ff" opacity="0.7"/>
        </svg>
    `,
    vex: `
        <svg width="20" height="24" viewBox="0 0 20 24">
            <!-- Small ghost-like floating body -->
            <rect x="5" y="8" width="10" height="12" fill="#7b68ee"/>
            <rect x="3" y="10" width="14" height="8" fill="#9370db"/>
            <!-- Glowing eyes -->
            <rect x="7" y="12" width="2" height="2" fill="#ff0000"/>
            <rect x="11" y="12" width="2" height="2" fill="#ff0000"/>
            <rect x="7.5" y="12.5" width="1" height="1" fill="#ffffff"/>
            <rect x="11.5" y="12.5" width="1" height="1" fill="#ffffff"/>
            <!-- Small wings -->
            <rect x="1" y="10" width="4" height="6" fill="#4b0082"/>
            <rect x="15" y="10" width="4" height="6" fill="#4b0082"/>
            <!-- Tail wisp -->
            <rect x="8" y="20" width="4" height="3" fill="#6a5acd" opacity="0.7"/>
            <!-- Magic particles -->
            <rect x="2" y="6" width="1" height="1" fill="#ff69b4" opacity="0.8"/>
            <rect x="17" y="8" width="1" height="1" fill="#ff69b4" opacity="0.8"/>
            <rect x="10" y="4" width="1" height="1" fill="#ff69b4" opacity="0.8"/>
        </svg>
    `,
    vindicator: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="18" y="5" width="24" height="20" fill="#D2691E"/>
            <rect x="15" y="8" width="30" height="14" fill="#DEB887"/>
            <!-- Unibrow and angry eyes -->
            <rect x="20" y="11" width="20" height="3" fill="#654321"/>
            <rect x="22" y="14" width="4" height="4" fill="#8B0000"/>
            <rect x="34" y="14" width="4" height="4" fill="#8B0000"/>
            <rect x="23" y="15" width="2" height="2" fill="#FF0000"/>
            <rect x="35" y="15" width="2" height="2" fill="#FF0000"/>
            <!-- Large nose -->
            <rect x="28" y="18" width="4" height="6" fill="#CD853F"/>
            <rect x="29" y="20" width="2" height="2" fill="#000"/>
            <!-- Angry mouth -->
            <rect x="26" y="22" width="8" height="2" fill="#654321"/>
            <!-- Body (dark robe) -->
            <rect x="18" y="25" width="24" height="25" fill="#2F4F4F"/>
            <rect x="15" y="28" width="30" height="19" fill="#696969"/>
            <!-- Arms -->
            <rect x="6" y="28" width="12" height="20" fill="#D2691E"/>
            <rect x="42" y="28" width="12" height="20" fill="#D2691E"/>
            <!-- Iron axe in right hand -->
            <rect x="48" y="20" width="3" height="25" fill="#8B4513"/>
            <rect x="45" y="18" width="9" height="8" fill="#C0C0C0"/>
            <rect x="47" y="16" width="5" height="4" fill="#A9A9A9"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#654321"/>
            <rect x="32" y="50" width="8" height="10" fill="#654321"/>
            <!-- Belt -->
            <rect x="18" y="35" width="24" height="3" fill="#654321"/>
        </svg>
    `,
    breeze: `
        <svg width="90" height="90" viewBox="0 0 90 90">
            <!-- Main floating body (translucent wind) -->
            <ellipse cx="45" cy="45" rx="35" ry="30" fill="#87CEEB" opacity="0.6"/>
            <ellipse cx="45" cy="45" rx="30" ry="25" fill="#B0E0E6" opacity="0.7"/>
            <ellipse cx="45" cy="45" rx="25" ry="20" fill="#E0F6FF" opacity="0.8"/>
            
            <!-- Wind swirls (body pattern) -->
            <path d="M25 35 Q35 25, 45 35 Q55 45, 65 35" stroke="#4682B4" stroke-width="2" fill="none" opacity="0.8"/>
            <path d="M20 45 Q30 35, 40 45 Q50 55, 60 45" stroke="#4682B4" stroke-width="2" fill="none" opacity="0.7"/>
            <path d="M25 55 Q35 45, 45 55 Q55 65, 65 55" stroke="#4682B4" stroke-width="2" fill="none" opacity="0.6"/>
            
            <!-- Core/eyes (glowing blue) -->
            <circle cx="37" cy="38" r="4" fill="#00BFFF"/>
            <circle cx="53" cy="38" r="4" fill="#00BFFF"/>
            <circle cx="37" cy="38" r="2" fill="#FFFFFF" opacity="0.9"/>
            <circle cx="53" cy="38" r="2" fill="#FFFFFF" opacity="0.9"/>
            
            <!-- Wind tendrils extending from body -->
            <path d="M15 40 Q10 35, 5 40 Q10 45, 15 40" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.5"/>
            <path d="M75 50 Q80 45, 85 50 Q80 55, 75 50" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.5"/>
            <path d="M20 65 Q15 70, 10 65 Q15 60, 20 65" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.4"/>
            <path d="M70 25 Q75 20, 80 25 Q75 30, 70 25" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.4"/>
            
            <!-- Wind particles floating around -->
            <circle cx="20" cy="20" r="1.5" fill="#87CEEB" opacity="0.8"/>
            <circle cx="70" cy="15" r="1.5" fill="#87CEEB" opacity="0.7"/>
            <circle cx="15" cy="70" r="1.5" fill="#87CEEB" opacity="0.8"/>
            <circle cx="75" cy="75" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="45" cy="10" r="1" fill="#B0E0E6" opacity="0.9"/>
            <circle cx="10" cy="45" r="1" fill="#B0E0E6" opacity="0.7"/>
            <circle cx="80" cy="45" r="1" fill="#B0E0E6" opacity="0.8"/>
            
            <!-- Central wind vortex -->
            <circle cx="45" cy="45" r="8" fill="none" stroke="#4682B4" stroke-width="1" opacity="0.6"/>
            <circle cx="45" cy="45" r="12" fill="none" stroke="#87CEEB" stroke-width="1" opacity="0.4"/>
            <circle cx="45" cy="45" r="16" fill="none" stroke="#B0E0E6" stroke-width="1" opacity="0.3"/>
        </svg>
    `,
    drowned: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#2E8B57"/>
            <rect x="12" y="8" width="36" height="19" fill="#3CB371"/>
            <!-- Barnacles and sea growth -->
            <rect x="18" y="6" width="4" height="2" fill="#228B22"/>
            <rect x="38" y="8" width="3" height="2" fill="#006400"/>
            <rect x="25" y="4" width="2" height="3" fill="#228B22"/>
            <!-- Eyes (glowing blue from water) -->
            <rect x="20" y="12" width="6" height="6" fill="#00CED1"/>
            <rect x="34" y="12" width="6" height="6" fill="#00CED1"/>
            <rect x="22" y="14" width="2" height="2" fill="#FFFFFF"/>
            <rect x="36" y="14" width="2" height="2" fill="#FFFFFF"/>
            <!-- Mouth -->
            <rect x="24" y="20" width="12" height="4" fill="#1C1C1C"/>
            <rect x="26" y="22" width="2" height="2" fill="#FFFFFF"/>
            <rect x="30" y="22" width="2" height="2" fill="#FFFFFF"/>
            <rect x="34" y="22" width="2" height="2" fill="#FFFFFF"/>
            <!-- Body (waterlogged and decayed) -->
            <rect x="18" y="30" width="24" height="20" fill="#4682B4"/>
            <rect x="15" y="33" width="30" height="14" fill="#5F9EA0"/>
            <!-- Seaweed patches -->
            <rect x="20" y="35" width="6" height="2" fill="#228B22"/>
            <rect x="34" y="38" width="4" height="2" fill="#006400"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#2E8B57"/>
            <rect x="42" y="32" width="12" height="18" fill="#2E8B57"/>
            <!-- Trident in one arm -->
            <rect x="48" y="25" width="2" height="20" fill="#8B4513"/>
            <rect x="46" y="22" width="6" height="6" fill="#C0C0C0"/>
            <rect x="47" y="20" width="4" height="4" fill="#A9A9A9"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#4682B4"/>
            <rect x="32" y="50" width="8" height="10" fill="#4682B4"/>
            <!-- Water droplets -->
            <circle cx="12" cy="15" r="1" fill="#00BFFF" opacity="0.8"/>
            <circle cx="48" cy="18" r="1" fill="#00BFFF" opacity="0.8"/>
            <circle cx="25" cy="55" r="1" fill="#00BFFF" opacity="0.8"/>
        </svg>
    `,
    guardian: `
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Main body (orange/brownish guardian) -->
            <ellipse cx="40" cy="40" rx="30" ry="25" fill="#DEB887"/>
            <ellipse cx="40" cy="40" rx="25" ry="20" fill="#F4A460"/>
            <ellipse cx="40" cy="40" rx="20" ry="15" fill="#D2691E"/>
            
            <!-- Spikes around body -->
            <polygon points="15,25 10,20 15,15" fill="#8B4513"/>
            <polygon points="65,25 70,20 65,15" fill="#8B4513"/>
            <polygon points="25,10 20,5 30,5" fill="#8B4513"/>
            <polygon points="55,10 60,5 50,5" fill="#8B4513"/>
            <polygon points="15,55 10,60 15,65" fill="#8B4513"/>
            <polygon points="65,55 70,60 65,65" fill="#8B4513"/>
            <polygon points="25,70 20,75 30,75" fill="#8B4513"/>
            <polygon points="55,70 60,75 50,75" fill="#8B4513"/>
            
            <!-- Central eye -->
            <circle cx="40" cy="40" r="12" fill="#FF4500"/>
            <circle cx="40" cy="40" r="8" fill="#FFD700"/>
            <circle cx="40" cy="40" r="4" fill="#000000"/>
            <circle cx="40" cy="40" r="2" fill="#FFFFFF"/>
            
            <!-- Tail -->
            <rect x="70" y="35" width="8" height="10" fill="#D2691E"/>
            <rect x="76" y="37" width="6" height="6" fill="#8B4513"/>
            
            <!-- Swimming fins -->
            <ellipse cx="20" cy="30" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            <ellipse cx="60" cy="30" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            <ellipse cx="20" cy="50" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            <ellipse cx="60" cy="50" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            
            <!-- Body patterns -->
            <circle cx="30" cy="30" r="2" fill="#8B4513" opacity="0.7"/>
            <circle cx="50" cy="30" r="2" fill="#8B4513" opacity="0.7"/>
            <circle cx="30" cy="50" r="2" fill="#8B4513" opacity="0.7"/>
            <circle cx="50" cy="50" r="2" fill="#8B4513" opacity="0.7"/>
            
            <!-- Water bubble effects -->
            <circle cx="15" cy="20" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="65" cy="25" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="20" cy="60" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="60" cy="65" r="1.5" fill="#87CEEB" opacity="0.6"/>
        </svg>
    `,
    elder_guardian: `
        <svg width="100" height="100" viewBox="0 0 100 100">
            <!-- Main body (larger, darker guardian) -->
            <ellipse cx="50" cy="50" rx="40" ry="35" fill="#696969"/>
            <ellipse cx="50" cy="50" rx="35" ry="30" fill="#778899"/>
            <ellipse cx="50" cy="50" rx="30" ry="25" fill="#2F4F4F"/>
            
            <!-- Large spikes around body -->
            <polygon points="15,30 8,25 15,20" fill="#1C1C1C"/>
            <polygon points="85,30 92,25 85,20" fill="#1C1C1C"/>
            <polygon points="30,10 25,3 35,3" fill="#1C1C1C"/>
            <polygon points="70,10 75,3 65,3" fill="#1C1C1C"/>
            <polygon points="15,70 8,75 15,80" fill="#1C1C1C"/>
            <polygon points="85,70 92,75 85,80" fill="#1C1C1C"/>
            <polygon points="30,90 25,97 35,97" fill="#1C1C1C"/>
            <polygon points="70,90 75,97 65,97" fill="#1C1C1C"/>
            
            <!-- Additional smaller spikes -->
            <polygon points="20,40 15,38 20,36" fill="#1C1C1C"/>
            <polygon points="80,40 85,38 80,36" fill="#1C1C1C"/>
            <polygon points="20,60 15,62 20,64" fill="#1C1C1C"/>
            <polygon points="80,60 85,62 80,64" fill="#1C1C1C"/>
            
            <!-- Central eye (larger and more menacing) -->
            <circle cx="50" cy="50" r="16" fill="#8B0000"/>
            <circle cx="50" cy="50" r="12" fill="#FF4500"/>
            <circle cx="50" cy="50" r="8" fill="#FFD700"/>
            <circle cx="50" cy="50" r="4" fill="#000000"/>
            <circle cx="50" cy="50" r="2" fill="#FFFFFF"/>
            
            <!-- Laser beam effect (when active) -->
            <rect x="66" y="48" width="30" height="4" fill="#FF0000" opacity="0.8"/>
            <rect x="68" y="49" width="28" height="2" fill="#FFFFFF" opacity="0.9"/>
            
            <!-- Tail -->
            <rect x="90" y="45" width="10" height="10" fill="#2F4F4F"/>
            <rect x="98" y="47" width="6" height="6" fill="#1C1C1C"/>
            
            <!-- Swimming fins (larger) -->
            <ellipse cx="20" cy="35" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            <ellipse cx="80" cy="35" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            <ellipse cx="20" cy="65" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            <ellipse cx="80" cy="65" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            
            <!-- Body patterns (elder markings) -->
            <circle cx="35" cy="35" r="3" fill="#1C1C1C" opacity="0.7"/>
            <circle cx="65" cy="35" r="3" fill="#1C1C1C" opacity="0.7"/>
            <circle cx="35" cy="65" r="3" fill="#1C1C1C" opacity="0.7"/>
            <circle cx="65" cy="65" r="3" fill="#1C1C1C" opacity="0.7"/>
            
            <!-- Ancient runes/markings -->
            <rect x="25" y="25" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            <rect x="67" y="25" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            <rect x="25" y="73" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            <rect x="67" y="73" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            
            <!-- Water effects (more powerful) -->
            <circle cx="10" cy="20" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="90" cy="25" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="15" cy="80" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="85" cy="85" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="50" cy="10" r="1.5" fill="#00BFFF" opacity="0.7"/>
            <circle cx="50" cy="90" r="1.5" fill="#00BFFF" opacity="0.7"/>
        </svg>
    `,
    bubble: `
        <svg width="20" height="20" viewBox="0 0 20 20">
            <!-- Bubble main body -->
            <circle cx="10" cy="10" r="8" fill="#87CEEB" opacity="0.6"/>
            <circle cx="10" cy="10" r="6" fill="#B0E0E6" opacity="0.7"/>
            <circle cx="10" cy="10" r="4" fill="#E0F6FF" opacity="0.8"/>
            
            <!-- Bubble shine effect -->
            <circle cx="7" cy="7" r="2" fill="#FFFFFF" opacity="0.9"/>
            <circle cx="6" cy="6" r="1" fill="#FFFFFF" opacity="1"/>
            
            <!-- Small highlight -->
            <circle cx="12" cy="8" r="1" fill="#FFFFFF" opacity="0.7"/>
            
            <!-- Bubble outline -->
            <circle cx="10" cy="10" r="8" fill="none" stroke="#4682B4" stroke-width="0.5" opacity="0.8"/>
            
            <!-- Water droplets around bubble -->
            <circle cx="3" cy="5" r="0.5" fill="#00BFFF" opacity="0.8"/>
            <circle cx="17" cy="7" r="0.5" fill="#00BFFF" opacity="0.8"/>
            <circle cx="5" cy="16" r="0.5" fill="#00BFFF" opacity="0.8"/>
            <circle cx="15" cy="15" r="0.5" fill="#00BFFF" opacity="0.8"/>
        </svg>
    `,
    creepernado: `
        <svg width="120" height="180" viewBox="0 0 120 180" shape-rendering="crispEdges">
            <!-- Main creeper body in tornado formation -->
            <g transform="translate(30,40)">
                <!-- Core creeper pattern -->
                <rect x="0" y="0" width="60" height="80" fill="#0da70b"/>
                <rect x="5" y="5" width="50" height="70" fill="#0b8f09"/>
                
                <!-- Creeper face pattern -->
                <rect x="15" y="15" width="8" height="12" fill="#000"/>
                <rect x="37" y="15" width="8" height="12" fill="#000"/>
                <rect x="17" y="17" width="4" height="8" fill="#333"/>
                <rect x="39" y="17" width="4" height="8" fill="#333"/>
                
                <!-- Mouth pattern -->
                <rect x="20" y="30" width="8" height="8" fill="#000"/>
                <rect x="32" y="30" width="8" height="8" fill="#000"/>
                <rect x="24" y="38" width="12" height="15" fill="#000"/>
                
                <!-- Body texture -->
                <rect x="10" y="50" width="8" height="3" fill="#085c07"/>
                <rect x="42" y="50" width="8" height="3" fill="#085c07"/>
                <rect x="20" y="60" width="20" height="3" fill="#085c07"/>
            </g>
            
            <!-- Tornado swirl effect with creeper blocks -->
            <g transform="translate(10,10)">
                <!-- Swirling creeper debris -->
                <rect x="5" y="20" width="12" height="12" fill="#4CAF50" opacity="0.8"/>
                <rect x="7" y="22" width="8" height="8" fill="#2E7D32" opacity="0.9"/>
                <rect x="9" y="24" width="4" height="4" fill="#111"/>
                
                <rect x="80" y="30" width="15" height="15" fill="#4CAF50" opacity="0.7"/>
                <rect x="82" y="32" width="11" height="11" fill="#2E7D32" opacity="0.8"/>
                <rect x="85" y="35" width="5" height="5" fill="#111"/>
                
                <rect x="15" y="60" width="10" height="10" fill="#388E3C" opacity="0.9"/>
                <rect x="17" y="62" width="6" height="6" fill="#2E7D32"/>
                <rect x="19" y="64" width="2" height="2" fill="#111"/>
                
                <rect x="85" y="70" width="13" height="13" fill="#4CAF50" opacity="0.6"/>
                <rect x="87" y="72" width="9" height="9" fill="#2E7D32" opacity="0.8"/>
                <rect x="89" y="74" width="5" height="5" fill="#111"/>
                
                <rect x="20" y="100" width="8" height="8" fill="#388E3C" opacity="0.8"/>
                <rect x="22" y="102" width="4" height="4" fill="#111"/>
                
                <rect x="75" y="110" width="11" height="11" fill="#4CAF50" opacity="0.7"/>
                <rect x="77" y="112" width="7" height="7" fill="#2E7D32"/>
                <rect x="79" y="114" width="3" height="3" fill="#111"/>
            </g>
            
            <!-- Tornado wind effects -->
            <g opacity="0.6">
                <!-- Wind swirls -->
                <path d="M10 40 Q60 20, 110 40 Q60 60, 10 40" stroke="#87CEEB" stroke-width="2" fill="none" opacity="0.4"/>
                <path d="M15 80 Q60 60, 105 80 Q60 100, 15 80" stroke="#87CEEB" stroke-width="2" fill="none" opacity="0.4"/>
                <path d="M20 120 Q60 100, 100 120 Q60 140, 20 120" stroke="#87CEEB" stroke-width="2" fill="none" opacity="0.4"/>
                
                <!-- Wind particles -->
                <circle cx="25" cy="35" r="1.5" fill="#B0E0E6" opacity="0.7"/>
                <circle cx="95" cy="45" r="1" fill="#B0E0E6" opacity="0.8"/>
                <circle cx="30" cy="75" r="1.5" fill="#87CEEB" opacity="0.6"/>
                <circle cx="90" cy="85" r="1" fill="#87CEEB" opacity="0.7"/>
                <circle cx="35" cy="115" r="1.5" fill="#B0E0E6" opacity="0.8"/>
                <circle cx="85" cy="125" r="1" fill="#B0E0E6" opacity="0.6"/>
            </g>
            
            <!-- Ground debris -->
            <g transform="translate(10,150)">
                <rect x="10" y="10" width="6" height="6" fill="#654321" opacity="0.8"/>
                <rect x="25" y="15" width="4" height="4" fill="#8B4513" opacity="0.7"/>
                <rect x="40" y="8" width="8" height="8" fill="#4CAF50" opacity="0.6"/>
                <rect x="55" y="12" width="5" height="5" fill="#2E7D32" opacity="0.8"/>
                <rect x="70" y="5" width="7" height="7" fill="#654321" opacity="0.7"/>
                <rect x="85" y="18" width="6" height="6" fill="#8B4513" opacity="0.8"/>
            </g>
            
            <!-- Explosive energy at center -->
            <g transform="translate(50,90)" opacity="0.8">
                <circle cx="10" cy="10" r="8" fill="#FF4500" opacity="0.6"/>
                <circle cx="10" cy="10" r="5" fill="#FF6600" opacity="0.8"/>
                <circle cx="10" cy="10" r="3" fill="#FFAA00" opacity="0.9"/>
                <circle cx="10" cy="10" r="1" fill="#FFFFFF" opacity="1"/>
            </g>
        </svg>
    `,
    endermanHead: `
        <svg width="40" height="40" viewBox="0 0 40 40" shape-rendering="crispEdges">
            <!-- Head -->
            <rect x="10" y="5" width="20" height="20" fill="#000000"/>
            <rect x="8" y="7" width="24" height="16" fill="#0a0a0a"/>
            <!-- Glowing eyes -->
            <rect x="12" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="24" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="13" y="13" width="2" height="6" fill="#ffffff"/>
            <rect x="25" y="13" width="2" height="6" fill="#ffffff"/>
            <!-- Teleport particles around head -->
            <rect x="5" y="10" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="33" y="15" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="8" y="25" width="2" height="2" fill="#8b00ff" opacity="0.9"/>
            <rect x="30" y="28" width="2" height="2" fill="#8b00ff" opacity="0.6"/>
        </svg>
    `,
    endwither: `
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="180" viewBox="0 0 800 1200" shape-rendering="crispEdges">
<rect x="380" y="500" width="80" height="450" fill="#424242"/>
<rect x="220" y="520" width="400" height="40" fill="#424242"/>
<rect x="220" y="620" width="400" height="40" fill="#424242"/>
<rect x="220" y="720" width="400" height="40" fill="#424242"/>
<rect x="220" y="820" width="400" height="40" fill="#424242"/>
<rect x="220" y="920" width="400" height="40" fill="#424242"/>
<g transform="translate(320,300)">
<rect x="0" y="0" width="160" height="160" fill="#111111"/>
<rect x="24.0" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
<rect x="100.8" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
</g>
<g transform="translate(120,320)">
<rect x="0" y="0" width="160" height="160" fill="#111111"/>
<rect x="24.0" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
<rect x="100.8" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
</g>
<g transform="translate(520,320)">
<rect x="0" y="0" width="160" height="160" fill="#111111"/>
<rect x="24.0" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
<rect x="100.8" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
</g>
</svg>
    `,
    end_golem: `
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="180" viewBox="0 0 900 1450" shape-rendering="crispEdges">
<rect x="90" y="420" width="26" height="180" fill="#111111"/>
<rect x="116" y="420" width="26" height="180" fill="#424242"/>
<rect x="142" y="420" width="26" height="180" fill="#212121"/>
<rect x="168" y="420" width="26" height="180" fill="#212121"/>
<rect x="90" y="446" width="26" height="180" fill="#424242"/>
<rect x="116" y="446" width="26" height="180" fill="#212121"/>
<rect x="142" y="446" width="26" height="180" fill="#212121"/>
<rect x="168" y="446" width="26" height="180" fill="#212121"/>
<rect x="90" y="472" width="26" height="180" fill="#212121"/>
<rect x="116" y="472" width="26" height="180" fill="#212121"/>
<rect x="142" y="472" width="26" height="180" fill="#212121"/>
<rect x="168" y="472" width="26" height="180" fill="#111111"/>
<rect x="90" y="498" width="26" height="180" fill="#212121"/>
<rect x="116" y="498" width="26" height="180" fill="#111111"/>
<rect x="142" y="498" width="26" height="180" fill="#424242"/>
<rect x="168" y="498" width="26" height="180" fill="#212121"/>
<rect x="90" y="524" width="26" height="180" fill="#424242"/>
<rect x="116" y="524" width="26" height="180" fill="#212121"/>
<rect x="142" y="524" width="26" height="180" fill="#212121"/>
<rect x="168" y="524" width="26" height="180" fill="#212121"/>
<rect x="90" y="550" width="26" height="180" fill="#212121"/>
<rect x="116" y="550" width="26" height="180" fill="#212121"/>
<rect x="142" y="550" width="26" height="180" fill="#212121"/>
<rect x="168" y="550" width="26" height="180" fill="#111111"/>
<rect x="90" y="576" width="26" height="180" fill="#212121"/>
<rect x="116" y="576" width="26" height="180" fill="#111111"/>
<rect x="142" y="576" width="26" height="180" fill="#424242"/>
<rect x="168" y="576" width="26" height="180" fill="#212121"/>
<rect x="90" y="602" width="26" height="180" fill="#424242"/>
<rect x="116" y="602" width="26" height="180" fill="#212121"/>
<rect x="142" y="602" width="26" height="180" fill="#212121"/>
<rect x="168" y="602" width="26" height="180" fill="#212121"/>
<rect x="90" y="628" width="26" height="180" fill="#212121"/>
<rect x="116" y="628" width="26" height="180" fill="#212121"/>
<rect x="142" y="628" width="26" height="180" fill="#212121"/>
<rect x="168" y="628" width="26" height="180" fill="#212121"/>
<rect x="90" y="654" width="26" height="180" fill="#212121"/>
<rect x="116" y="654" width="26" height="180" fill="#212121"/>
<rect x="142" y="654" width="26" height="180" fill="#111111"/>
<rect x="168" y="654" width="26" height="180" fill="#424242"/>
<rect x="90" y="680" width="26" height="180" fill="#111111"/>
<rect x="116" y="680" width="26" height="180" fill="#424242"/>
<rect x="142" y="680" width="26" height="180" fill="#212121"/>
<rect x="168" y="680" width="26" height="180" fill="#212121"/>
<rect x="90" y="706" width="26" height="180" fill="#212121"/>
<rect x="116" y="706" width="26" height="180" fill="#212121"/>
<rect x="142" y="706" width="26" height="180" fill="#212121"/>
<rect x="168" y="706" width="26" height="180" fill="#212121"/>
<rect x="90" y="732" width="26" height="180" fill="#212121"/>
<rect x="116" y="732" width="26" height="180" fill="#212121"/>
<rect x="142" y="732" width="26" height="180" fill="#111111"/>
<rect x="168" y="732" width="26" height="180" fill="#424242"/>
<rect x="90" y="758" width="26" height="180" fill="#111111"/>
<rect x="116" y="758" width="26" height="180" fill="#424242"/>
<rect x="142" y="758" width="26" height="180" fill="#212121"/>
<rect x="168" y="758" width="26" height="180" fill="#212121"/>
<rect x="90" y="784" width="26" height="180" fill="#212121"/>
<rect x="116" y="784" width="26" height="180" fill="#212121"/>
<rect x="142" y="784" width="26" height="180" fill="#212121"/>
<rect x="168" y="784" width="26" height="180" fill="#212121"/>
<rect x="90" y="810" width="26" height="180" fill="#212121"/>
<rect x="116" y="810" width="26" height="180" fill="#212121"/>
<rect x="142" y="810" width="26" height="180" fill="#212121"/>
<rect x="168" y="810" width="26" height="180" fill="#424242"/>
<rect x="90" y="836" width="26" height="180" fill="#212121"/>
<rect x="116" y="836" width="26" height="180" fill="#111111"/>
<rect x="142" y="836" width="26" height="180" fill="#424242"/>
<rect x="168" y="836" width="26" height="180" fill="#212121"/>
<rect x="90" y="862" width="26" height="180" fill="#424242"/>
<rect x="116" y="862" width="26" height="180" fill="#212121"/>
<rect x="142" y="862" width="26" height="180" fill="#212121"/>
<rect x="168" y="862" width="26" height="180" fill="#212121"/>
<rect x="90" y="888" width="26" height="180" fill="#212121"/>
<rect x="116" y="888" width="26" height="180" fill="#212121"/>
<rect x="142" y="888" width="26" height="180" fill="#212121"/>
<rect x="168" y="888" width="26" height="180" fill="#111111"/>
<rect x="90" y="914" width="26" height="180" fill="#212121"/>
<rect x="116" y="914" width="26" height="180" fill="#111111"/>
<rect x="142" y="914" width="26" height="180" fill="#424242"/>
<rect x="168" y="914" width="26" height="180" fill="#212121"/>
<rect x="90" y="940" width="26" height="180" fill="#424242"/>
<rect x="116" y="940" width="26" height="180" fill="#212121"/>
<rect x="142" y="940" width="26" height="180" fill="#212121"/>
<rect x="168" y="940" width="26" height="180" fill="#212121"/>
<rect x="90" y="966" width="26" height="180" fill="#212121"/>
<rect x="116" y="966" width="26" height="180" fill="#212121"/>
<rect x="142" y="966" width="26" height="180" fill="#212121"/>
<rect x="168" y="966" width="26" height="180" fill="#111111"/>
<rect x="90" y="992" width="26" height="180" fill="#212121"/>
<rect x="116" y="992" width="26" height="180" fill="#212121"/>
<rect x="142" y="992" width="26" height="180" fill="#424242"/>
<rect x="168" y="992" width="26" height="180" fill="#212121"/>
<rect x="90" y="1018" width="26" height="180" fill="#111111"/>
<rect x="116" y="1018" width="26" height="180" fill="#424242"/>
<rect x="142" y="1018" width="26" height="180" fill="#212121"/>
<rect x="168" y="1018" width="26" height="180" fill="#212121"/>
<rect x="90" y="1044" width="26" height="180" fill="#212121"/>
<rect x="116" y="1044" width="26" height="180" fill="#212121"/>
<rect x="142" y="1044" width="26" height="180" fill="#212121"/>
<rect x="168" y="1044" width="26" height="180" fill="#212121"/>
<rect x="90" y="1070" width="26" height="180" fill="#212121"/>
<rect x="116" y="1070" width="26" height="180" fill="#212121"/>
<rect x="142" y="1070" width="26" height="180" fill="#111111"/>
<rect x="168" y="1070" width="26" height="180" fill="#424242"/>
<rect x="90" y="1096" width="26" height="180" fill="#111111"/>
<rect x="116" y="1096" width="26" height="180" fill="#424242"/>
<rect x="142" y="1096" width="26" height="180" fill="#212121"/>
<rect x="168" y="1096" width="26" height="180" fill="#212121"/>
<rect x="90" y="1122" width="26" height="180" fill="#212121"/>
<rect x="116" y="1122" width="26" height="180" fill="#212121"/>
<rect x="142" y="1122" width="26" height="180" fill="#212121"/>
<rect x="168" y="1122" width="26" height="180" fill="#212121"/>
<rect x="90" y="1148" width="26" height="180" fill="#212121"/>
<rect x="116" y="1148" width="26" height="180" fill="#212121"/>
<rect x="142" y="1148" width="26" height="180" fill="#111111"/>
<rect x="168" y="1148" width="26" height="180" fill="#424242"/>
<rect x="690" y="420" width="26" height="180" fill="#111111"/>
<rect x="716" y="420" width="26" height="180" fill="#424242"/>
<rect x="742" y="420" width="26" height="180" fill="#212121"/>
<rect x="768" y="420" width="26" height="180" fill="#212121"/>
<rect x="690" y="446" width="26" height="180" fill="#424242"/>
<rect x="716" y="446" width="26" height="180" fill="#212121"/>
<rect x="742" y="446" width="26" height="180" fill="#212121"/>
<rect x="768" y="446" width="26" height="180" fill="#212121"/>
<rect x="690" y="472" width="26" height="180" fill="#212121"/>
<rect x="716" y="472" width="26" height="180" fill="#212121"/>
<rect x="742" y="472" width="26" height="180" fill="#212121"/>
<rect x="768" y="472" width="26" height="180" fill="#111111"/>
<rect x="690" y="498" width="26" height="180" fill="#212121"/>
<rect x="716" y="498" width="26" height="180" fill="#111111"/>
<rect x="742" y="498" width="26" height="180" fill="#424242"/>
<rect x="768" y="498" width="26" height="180" fill="#212121"/>
<rect x="690" y="524" width="26" height="180" fill="#424242"/>
<rect x="716" y="524" width="26" height="180" fill="#212121"/>
<rect x="742" y="524" width="26" height="180" fill="#212121"/>
<rect x="768" y="524" width="26" height="180" fill="#212121"/>
<rect x="690" y="550" width="26" height="180" fill="#212121"/>
<rect x="716" y="550" width="26" height="180" fill="#212121"/>
<rect x="742" y="550" width="26" height="180" fill="#212121"/>
<rect x="768" y="550" width="26" height="180" fill="#111111"/>
<rect x="690" y="576" width="26" height="180" fill="#212121"/>
<rect x="716" y="576" width="26" height="180" fill="#111111"/>
<rect x="742" y="576" width="26" height="180" fill="#424242"/>
<rect x="768" y="576" width="26" height="180" fill="#212121"/>
<rect x="690" y="602" width="26" height="180" fill="#424242"/>
<rect x="716" y="602" width="26" height="180" fill="#212121"/>
<rect x="742" y="602" width="26" height="180" fill="#212121"/>
<rect x="768" y="602" width="26" height="180" fill="#212121"/>
<rect x="690" y="628" width="26" height="180" fill="#212121"/>
<rect x="716" y="628" width="26" height="180" fill="#212121"/>
<rect x="742" y="628" width="26" height="180" fill="#212121"/>
<rect x="768" y="628" width="26" height="180" fill="#212121"/>
<rect x="690" y="654" width="26" height="180" fill="#212121"/>
<rect x="716" y="654" width="26" height="180" fill="#212121"/>
<rect x="742" y="654" width="26" height="180" fill="#111111"/>
<rect x="768" y="654" width="26" height="180" fill="#424242"/>
<rect x="690" y="680" width="26" height="180" fill="#111111"/>
<rect x="716" y="680" width="26" height="180" fill="#424242"/>
<rect x="742" y="680" width="26" height="180" fill="#212121"/>
<rect x="768" y="680" width="26" height="180" fill="#212121"/>
<rect x="690" y="706" width="26" height="180" fill="#212121"/>
<rect x="716" y="706" width="26" height="180" fill="#212121"/>
<rect x="742" y="706" width="26" height="180" fill="#212121"/>
<rect x="768" y="706" width="26" height="180" fill="#212121"/>
<rect x="690" y="732" width="26" height="180" fill="#212121"/>
<rect x="716" y="732" width="26" height="180" fill="#212121"/>
<rect x="742" y="732" width="26" height="180" fill="#111111"/>
<rect x="768" y="732" width="26" height="180" fill="#424242"/>
<rect x="690" y="758" width="26" height="180" fill="#111111"/>
<rect x="716" y="758" width="26" height="180" fill="#424242"/>
<rect x="742" y="758" width="26" height="180" fill="#212121"/>
<rect x="768" y="758" width="26" height="180" fill="#212121"/>
<rect x="690" y="784" width="26" height="180" fill="#212121"/>
<rect x="716" y="784" width="26" height="180" fill="#212121"/>
<rect x="742" y="784" width="26" height="180" fill="#212121"/>
<rect x="768" y="784" width="26" height="180" fill="#212121"/>
<rect x="690" y="810" width="26" height="180" fill="#212121"/>
<rect x="716" y="810" width="26" height="180" fill="#212121"/>
<rect x="742" y="810" width="26" height="180" fill="#212121"/>
<rect x="768" y="810" width="26" height="180" fill="#424242"/>
<rect x="690" y="836" width="26" height="180" fill="#212121"/>
<rect x="716" y="836" width="26" height="180" fill="#111111"/>
<rect x="742" y="836" width="26" height="180" fill="#424242"/>
<rect x="768" y="836" width="26" height="180" fill="#212121"/>
<rect x="690" y="862" width="26" height="180" fill="#424242"/>
<rect x="716" y="862" width="26" height="180" fill="#212121"/>
<rect x="742" y="862" width="26" height="180" fill="#212121"/>
<rect x="768" y="862" width="26" height="180" fill="#212121"/>
<rect x="690" y="888" width="26" height="180" fill="#212121"/>
<rect x="716" y="888" width="26" height="180" fill="#212121"/>
<rect x="742" y="888" width="26" height="180" fill="#212121"/>
<rect x="768" y="888" width="26" height="180" fill="#111111"/>
<rect x="690" y="914" width="26" height="180" fill="#212121"/>
<rect x="716" y="914" width="26" height="180" fill="#111111"/>
<rect x="742" y="914" width="26" height="180" fill="#424242"/>
<rect x="768" y="914" width="26" height="180" fill="#212121"/>
<rect x="690" y="940" width="26" height="180" fill="#424242"/>
<rect x="716" y="940" width="26" height="180" fill="#212121"/>
<rect x="742" y="940" width="26" height="180" fill="#212121"/>
<rect x="768" y="940" width="26" height="180" fill="#212121"/>
<rect x="690" y="966" width="26" height="180" fill="#212121"/>
<rect x="716" y="966" width="26" height="180" fill="#212121"/>
<rect x="742" y="966" width="26" height="180" fill="#212121"/>
<rect x="768" y="966" width="26" height="180" fill="#111111"/>
<rect x="690" y="992" width="26" height="180" fill="#212121"/>
<rect x="716" y="992" width="26" height="180" fill="#212121"/>
<rect x="742" y="992" width="26" height="180" fill="#424242"/>
<rect x="768" y="992" width="26" height="180" fill="#212121"/>
<rect x="690" y="1018" width="26" height="180" fill="#111111"/>
<rect x="716" y="1018" width="26" height="180" fill="#424242"/>
<rect x="742" y="1018" width="26" height="180" fill="#212121"/>
<rect x="768" y="1018" width="26" height="180" fill="#212121"/>
<rect x="690" y="1044" width="26" height="180" fill="#212121"/>
<rect x="716" y="1044" width="26" height="180" fill="#212121"/>
<rect x="742" y="1044" width="26" height="180" fill="#212121"/>
<rect x="768" y="1044" width="26" height="180" fill="#212121"/>
<rect x="690" y="1070" width="26" height="180" fill="#212121"/>
<rect x="716" y="1070" width="26" height="180" fill="#212121"/>
<rect x="742" y="1070" width="26" height="180" fill="#111111"/>
<rect x="768" y="1070" width="26" height="180" fill="#424242"/>
<rect x="690" y="1096" width="26" height="180" fill="#111111"/>
<rect x="716" y="1096" width="26" height="180" fill="#424242"/>
<rect x="742" y="1096" width="26" height="180" fill="#212121"/>
<rect x="768" y="1096" width="26" height="180" fill="#212121"/>
<rect x="690" y="1122" width="26" height="180" fill="#212121"/>
<rect x="716" y="1122" width="26" height="180" fill="#212121"/>
<rect x="742" y="1122" width="26" height="180" fill="#212121"/>
<rect x="768" y="1122" width="26" height="180" fill="#212121"/>
<rect x="690" y="1148" width="26" height="180" fill="#212121"/>
<rect x="716" y="1148" width="26" height="180" fill="#212121"/>
<rect x="742" y="1148" width="26" height="180" fill="#111111"/>
<rect x="768" y="1148" width="26" height="180" fill="#424242"/>
<rect x="90" y="410" width="120" height="180" fill="#EC407A"/>
<rect x="102" y="385" width="96" height="180" fill="#D81B60"/>
<rect x="112" y="360" width="76" height="180" fill="#EC407A"/>
<rect x="120" y="335" width="60" height="180" fill="#D81B60"/>
<rect x="690" y="410" width="120" height="180" fill="#EC407A"/>
<rect x="702" y="385" width="96" height="180" fill="#D81B60"/>
<rect x="712" y="360" width="76" height="180" fill="#EC407A"/>
<rect x="720" y="335" width="60" height="180" fill="#D81B60"/>
<rect x="240" y="640" width="26" height="180" fill="#111111"/>
<rect x="266" y="640" width="26" height="180" fill="#424242"/>
<rect x="292" y="640" width="26" height="180" fill="#212121"/>
<rect x="318" y="640" width="26" height="180" fill="#212121"/>
<rect x="344" y="640" width="26" height="180" fill="#212121"/>
<rect x="370" y="640" width="26" height="180" fill="#212121"/>
<rect x="396" y="640" width="26" height="180" fill="#111111"/>
<rect x="422" y="640" width="26" height="180" fill="#424242"/>
<rect x="448" y="640" width="26" height="180" fill="#212121"/>
<rect x="474" y="640" width="26" height="180" fill="#212121"/>
<rect x="500" y="640" width="26" height="180" fill="#212121"/>
<rect x="526" y="640" width="26" height="180" fill="#212121"/>
<rect x="552" y="640" width="26" height="180" fill="#111111"/>
<rect x="578" y="640" width="26" height="180" fill="#424242"/>
<rect x="604" y="640" width="26" height="180" fill="#212121"/>
<rect x="630" y="640" width="26" height="180" fill="#212121"/>
<rect x="240" y="666" width="26" height="180" fill="#424242"/>
<rect x="266" y="666" width="26" height="180" fill="#212121"/>
<rect x="292" y="666" width="26" height="180" fill="#212121"/>
<rect x="318" y="666" width="26" height="180" fill="#212121"/>
<rect x="344" y="666" width="26" height="180" fill="#212121"/>
<rect x="370" y="666" width="26" height="180" fill="#424242"/>
<rect x="396" y="666" width="26" height="180" fill="#212121"/>
<rect x="422" y="666" width="26" height="180" fill="#212121"/>
<rect x="448" y="666" width="26" height="180" fill="#212121"/>
<rect x="474" y="666" width="26" height="180" fill="#212121"/>
<rect x="500" y="666" width="26" height="180" fill="#111111"/>
<rect x="526" y="666" width="26" height="180" fill="#424242"/>
<rect x="552" y="666" width="26" height="180" fill="#212121"/>
<rect x="578" y="666" width="26" height="180" fill="#212121"/>
<rect x="604" y="666" width="26" height="180" fill="#212121"/>
<rect x="630" y="666" width="26" height="180" fill="#212121"/>
<rect x="240" y="692" width="26" height="180" fill="#212121"/>
<rect x="266" y="692" width="26" height="180" fill="#212121"/>
<rect x="292" y="692" width="26" height="180" fill="#212121"/>
<rect x="318" y="692" width="26" height="180" fill="#111111"/>
<rect x="344" y="692" width="26" height="180" fill="#424242"/>
<rect x="370" y="692" width="26" height="180" fill="#212121"/>
<rect x="396" y="692" width="26" height="180" fill="#212121"/>
<rect x="422" y="692" width="26" height="180" fill="#212121"/>
<rect x="448" y="692" width="26" height="180" fill="#212121"/>
<rect x="474" y="692" width="26" height="180" fill="#111111"/>
<rect x="500" y="692" width="26" height="180" fill="#424242"/>
<rect x="526" y="692" width="26" height="180" fill="#212121"/>
<rect x="552" y="692" width="26" height="180" fill="#212121"/>
<rect x="578" y="692" width="26" height="180" fill="#212121"/>
<rect x="604" y="692" width="26" height="180" fill="#111111"/>
<rect x="630" y="692" width="26" height="180" fill="#424242"/>
<rect x="240" y="718" width="26" height="180" fill="#212121"/>
<rect x="266" y="718" width="26" height="180" fill="#111111"/>
<rect x="292" y="718" width="26" height="180" fill="#424242"/>
<rect x="318" y="718" width="26" height="180" fill="#212121"/>
<rect x="344" y="718" width="26" height="180" fill="#212121"/>
<rect x="370" y="718" width="26" height="180" fill="#212121"/>
<rect x="396" y="718" width="26" height="180" fill="#212121"/>
<rect x="422" y="718" width="26" height="180" fill="#111111"/>
<rect x="448" y="718" width="26" height="180" fill="#424242"/>
<rect x="474" y="718" width="26" height="180" fill="#212121"/>
<rect x="500" y="718" width="26" height="180" fill="#212121"/>
<rect x="526" y="718" width="26" height="180" fill="#212121"/>
<rect x="552" y="718" width="26" height="180" fill="#212121"/>
<rect x="578" y="718" width="26" height="180" fill="#111111"/>
<rect x="604" y="718" width="26" height="180" fill="#424242"/>
<rect x="630" y="718" width="26" height="180" fill="#212121"/>
<rect x="240" y="744" width="26" height="180" fill="#424242"/>
<rect x="266" y="744" width="26" height="180" fill="#212121"/>
<rect x="292" y="744" width="26" height="180" fill="#212121"/>
<rect x="318" y="744" width="26" height="180" fill="#212121"/>
<rect x="344" y="744" width="26" height="180" fill="#212121"/>
<rect x="370" y="744" width="26" height="180" fill="#111111"/>
<rect x="396" y="744" width="26" height="180" fill="#424242"/>
<rect x="422" y="744" width="26" height="180" fill="#212121"/>
<rect x="448" y="744" width="26" height="180" fill="#212121"/>
<rect x="474" y="744" width="26" height="180" fill="#212121"/>
<rect x="500" y="744" width="26" height="180" fill="#212121"/>
<rect x="526" y="744" width="26" height="180" fill="#111111"/>
<rect x="552" y="744" width="26" height="180" fill="#424242"/>
<rect x="578" y="744" width="26" height="180" fill="#212121"/>
<rect x="604" y="744" width="26" height="180" fill="#212121"/>
<rect x="630" y="744" width="26" height="180" fill="#212121"/>
<rect x="240" y="770" width="26" height="180" fill="#212121"/>
<rect x="266" y="770" width="26" height="180" fill="#212121"/>
<rect x="292" y="770" width="26" height="180" fill="#212121"/>
<rect x="318" y="770" width="26" height="180" fill="#111111"/>
<rect x="344" y="770" width="26" height="180" fill="#424242"/>
<rect x="370" y="770" width="26" height="180" fill="#212121"/>
<rect x="396" y="770" width="26" height="180" fill="#212121"/>
<rect x="422" y="770" width="26" height="180" fill="#212121"/>
<rect x="448" y="770" width="26" height="180" fill="#212121"/>
<rect x="474" y="770" width="26" height="180" fill="#111111"/>
<rect x="500" y="770" width="26" height="180" fill="#424242"/>
<rect x="526" y="770" width="26" height="180" fill="#212121"/>
<rect x="552" y="770" width="26" height="180" fill="#212121"/>
<rect x="578" y="770" width="26" height="180" fill="#212121"/>
<rect x="604" y="770" width="26" height="180" fill="#212121"/>
<rect x="630" y="770" width="26" height="180" fill="#111111"/>
<rect x="240" y="796" width="26" height="180" fill="#212121"/>
<rect x="266" y="796" width="26" height="180" fill="#111111"/>
<rect x="292" y="796" width="26" height="180" fill="#424242"/>
<rect x="318" y="796" width="26" height="180" fill="#212121"/>
<rect x="344" y="796" width="26" height="180" fill="#212121"/>
<rect x="370" y="796" width="26" height="180" fill="#212121"/>
<rect x="396" y="796" width="26" height="180" fill="#212121"/>
<rect x="422" y="796" width="26" height="180" fill="#111111"/>
<rect x="448" y="796" width="26" height="180" fill="#424242"/>
<rect x="474" y="796" width="26" height="180" fill="#212121"/>
<rect x="500" y="796" width="26" height="180" fill="#212121"/>
<rect x="526" y="796" width="26" height="180" fill="#212121"/>
<rect x="552" y="796" width="26" height="180" fill="#212121"/>
<rect x="578" y="796" width="26" height="180" fill="#111111"/>
<rect x="604" y="796" width="26" height="180" fill="#424242"/>
<rect x="630" y="796" width="26" height="180" fill="#212121"/>
<rect x="240" y="822" width="26" height="180" fill="#424242"/>
<rect x="266" y="822" width="26" height="180" fill="#212121"/>
<rect x="292" y="822" width="26" height="180" fill="#212121"/>
<rect x="318" y="822" width="26" height="180" fill="#212121"/>
<rect x="344" y="822" width="26" height="180" fill="#212121"/>
<rect x="370" y="822" width="26" height="180" fill="#111111"/>
<rect x="396" y="822" width="26" height="180" fill="#424242"/>
<rect x="422" y="822" width="26" height="180" fill="#212121"/>
<rect x="448" y="822" width="26" height="180" fill="#212121"/>
<rect x="474" y="822" width="26" height="180" fill="#212121"/>
<rect x="500" y="822" width="26" height="180" fill="#212121"/>
<rect x="526" y="822" width="26" height="180" fill="#111111"/>
<rect x="552" y="822" width="26" height="180" fill="#424242"/>
<rect x="578" y="822" width="26" height="180" fill="#212121"/>
<rect x="604" y="822" width="26" height="180" fill="#212121"/>
<rect x="630" y="822" width="26" height="180" fill="#212121"/>
<rect x="240" y="848" width="26" height="180" fill="#212121"/>
<rect x="266" y="848" width="26" height="180" fill="#212121"/>
<rect x="292" y="848" width="26" height="180" fill="#212121"/>
<rect x="318" y="848" width="26" height="180" fill="#212121"/>
<rect x="344" y="848" width="26" height="180" fill="#424242"/>
<rect x="370" y="848" width="26" height="180" fill="#212121"/>
<rect x="396" y="848" width="26" height="180" fill="#212121"/>
<rect x="422" y="848" width="26" height="180" fill="#212121"/>
<rect x="448" y="848" width="26" height="180" fill="#212121"/>
<rect x="474" y="848" width="26" height="180" fill="#111111"/>
<rect x="500" y="848" width="26" height="180" fill="#424242"/>
<rect x="526" y="848" width="26" height="180" fill="#212121"/>
<rect x="552" y="848" width="26" height="180" fill="#212121"/>
<rect x="578" y="848" width="26" height="180" fill="#212121"/>
<rect x="604" y="848" width="26" height="180" fill="#212121"/>
<rect x="630" y="848" width="26" height="180" fill="#111111"/>
<rect x="240" y="874" width="26" height="180" fill="#212121"/>
<rect x="266" y="874" width="26" height="180" fill="#212121"/>
<rect x="292" y="874" width="26" height="180" fill="#111111"/>
<rect x="318" y="874" width="26" height="180" fill="#424242"/>
<rect x="344" y="874" width="26" height="180" fill="#212121"/>
<rect x="370" y="874" width="26" height="180" fill="#212121"/>
<rect x="396" y="874" width="26" height="180" fill="#212121"/>
<rect x="422" y="874" width="26" height="180" fill="#212121"/>
<rect x="448" y="874" width="26" height="180" fill="#111111"/>
<rect x="474" y="874" width="26" height="180" fill="#424242"/>
<rect x="500" y="874" width="26" height="180" fill="#212121"/>
<rect x="526" y="874" width="26" height="180" fill="#212121"/>
<rect x="552" y="874" width="26" height="180" fill="#212121"/>
<rect x="578" y="874" width="26" height="180" fill="#111111"/>
<rect x="604" y="874" width="26" height="180" fill="#424242"/>
<rect x="630" y="874" width="26" height="180" fill="#212121"/>
<rect x="240" y="900" width="26" height="180" fill="#111111"/>
<rect x="266" y="900" width="26" height="180" fill="#424242"/>
<rect x="292" y="900" width="26" height="180" fill="#212121"/>
<rect x="318" y="900" width="26" height="180" fill="#212121"/>
<rect x="344" y="900" width="26" height="180" fill="#212121"/>
<rect x="370" y="900" width="26" height="180" fill="#212121"/>
<rect x="396" y="900" width="26" height="180" fill="#111111"/>
<rect x="422" y="900" width="26" height="180" fill="#424242"/>
<rect x="448" y="900" width="26" height="180" fill="#212121"/>
<rect x="474" y="900" width="26" height="180" fill="#212121"/>
<rect x="500" y="900" width="26" height="180" fill="#212121"/>
<rect x="526" y="900" width="26" height="180" fill="#212121"/>
<rect x="552" y="900" width="26" height="180" fill="#111111"/>
<rect x="578" y="900" width="26" height="180" fill="#424242"/>
<rect x="604" y="900" width="26" height="180" fill="#212121"/>
<rect x="630" y="900" width="26" height="180" fill="#212121"/>
<rect x="240" y="926" width="26" height="180" fill="#212121"/>
<rect x="266" y="926" width="26" height="180" fill="#212121"/>
<rect x="292" y="926" width="26" height="180" fill="#212121"/>
<rect x="318" y="926" width="26" height="180" fill="#212121"/>
<rect x="344" y="926" width="26" height="180" fill="#111111"/>
<rect x="370" y="926" width="26" height="180" fill="#424242"/>
<rect x="396" y="926" width="26" height="180" fill="#212121"/>
<rect x="422" y="926" width="26" height="180" fill="#212121"/>
<rect x="448" y="926" width="26" height="180" fill="#212121"/>
<rect x="474" y="926" width="26" height="180" fill="#212121"/>
<rect x="500" y="926" width="26" height="180" fill="#111111"/>
<rect x="526" y="926" width="26" height="180" fill="#424242"/>
<rect x="552" y="926" width="26" height="180" fill="#212121"/>
<rect x="578" y="926" width="26" height="180" fill="#212121"/>
<rect x="604" y="926" width="26" height="180" fill="#212121"/>
<rect x="630" y="926" width="26" height="180" fill="#212121"/>
<rect x="240" y="952" width="26" height="180" fill="#212121"/>
<rect x="266" y="952" width="26" height="180" fill="#212121"/>
<rect x="292" y="952" width="26" height="180" fill="#111111"/>
<rect x="318" y="952" width="26" height="180" fill="#424242"/>
<rect x="344" y="952" width="26" height="180" fill="#212121"/>
<rect x="370" y="952" width="26" height="180" fill="#212121"/>
<rect x="396" y="952" width="26" height="180" fill="#212121"/>
<rect x="422" y="952" width="26" height="180" fill="#212121"/>
<rect x="448" y="952" width="26" height="180" fill="#111111"/>
<rect x="474" y="952" width="26" height="180" fill="#424242"/>
<rect x="500" y="952" width="26" height="180" fill="#212121"/>
<rect x="526" y="952" width="26" height="180" fill="#212121"/>
<rect x="552" y="952" width="26" height="180" fill="#212121"/>
<rect x="578" y="952" width="26" height="180" fill="#212121"/>
<rect x="604" y="952" width="26" height="180" fill="#111111"/>
<rect x="630" y="952" width="26" height="180" fill="#424242"/>
<rect x="240" y="978" width="26" height="180" fill="#111111"/>
<rect x="266" y="978" width="26" height="180" fill="#424242"/>
<rect x="292" y="978" width="26" height="180" fill="#212121"/>
<rect x="318" y="978" width="26" height="180" fill="#212121"/>
<rect x="344" y="978" width="26" height="180" fill="#212121"/>
<rect x="370" y="978" width="26" height="180" fill="#212121"/>
<rect x="396" y="978" width="26" height="180" fill="#111111"/>
<rect x="422" y="978" width="26" height="180" fill="#424242"/>
<rect x="448" y="978" width="26" height="180" fill="#212121"/>
<rect x="474" y="978" width="26" height="180" fill="#212121"/>
<rect x="500" y="978" width="26" height="180" fill="#212121"/>
<rect x="526" y="978" width="26" height="180" fill="#212121"/>
<rect x="552" y="978" width="26" height="180" fill="#111111"/>
<rect x="578" y="978" width="26" height="180" fill="#424242"/>
<rect x="604" y="978" width="26" height="180" fill="#212121"/>
<rect x="630" y="978" width="26" height="180" fill="#212121"/>
<rect x="240" y="1004" width="26" height="180" fill="#212121"/>
<rect x="266" y="1004" width="26" height="180" fill="#212121"/>
<rect x="292" y="1004" width="26" height="180" fill="#212121"/>
<rect x="318" y="1004" width="26" height="180" fill="#212121"/>
<rect x="344" y="1004" width="26" height="180" fill="#111111"/>
<rect x="370" y="1004" width="26" height="180" fill="#424242"/>
<rect x="396" y="1004" width="26" height="180" fill="#212121"/>
<rect x="422" y="1004" width="26" height="180" fill="#212121"/>
<rect x="448" y="1004" width="26" height="180" fill="#212121"/>
<rect x="474" y="1004" width="26" height="180" fill="#212121"/>
<rect x="500" y="1004" width="26" height="180" fill="#111111"/>
<rect x="526" y="1004" width="26" height="180" fill="#424242"/>
<rect x="552" y="1004" width="26" height="180" fill="#212121"/>
<rect x="578" y="1004" width="26" height="180" fill="#212121"/>
<rect x="604" y="1004" width="26" height="180" fill="#212121"/>
<rect x="630" y="1004" width="26" height="180" fill="#212121"/>
<rect x="240" y="1030" width="26" height="180" fill="#212121"/>
<rect x="266" y="1030" width="26" height="180" fill="#212121"/>
<rect x="292" y="1030" width="26" height="180" fill="#212121"/>
<rect x="318" y="1030" width="26" height="180" fill="#424242"/>
<rect x="344" y="1030" width="26" height="180" fill="#212121"/>
<rect x="370" y="1030" width="26" height="180" fill="#212121"/>
<rect x="396" y="1030" width="26" height="180" fill="#212121"/>
<rect x="422" y="1030" width="26" height="180" fill="#212121"/>
<rect x="448" y="1030" width="26" height="180" fill="#111111"/>
<rect x="474" y="1030" width="26" height="180" fill="#424242"/>
<rect x="500" y="1030" width="26" height="180" fill="#212121"/>
<rect x="526" y="1030" width="26" height="180" fill="#212121"/>
<rect x="552" y="1030" width="26" height="180" fill="#212121"/>
<rect x="578" y="1030" width="26" height="180" fill="#212121"/>
<rect x="604" y="1030" width="26" height="180" fill="#111111"/>
<rect x="630" y="1030" width="26" height="180" fill="#424242"/>
<rect x="240" y="1056" width="26" height="180" fill="#212121"/>
<rect x="266" y="1056" width="26" height="180" fill="#111111"/>
<rect x="292" y="1056" width="26" height="180" fill="#424242"/>
<rect x="318" y="1056" width="26" height="180" fill="#212121"/>
<rect x="344" y="1056" width="26" height="180" fill="#212121"/>
<rect x="370" y="1056" width="26" height="180" fill="#212121"/>
<rect x="396" y="1056" width="26" height="180" fill="#212121"/>
<rect x="422" y="1056" width="26" height="180" fill="#111111"/>
<rect x="448" y="1056" width="26" height="180" fill="#424242"/>
<rect x="474" y="1056" width="26" height="180" fill="#212121"/>
<rect x="500" y="1056" width="26" height="180" fill="#212121"/>
<rect x="526" y="1056" width="26" height="180" fill="#212121"/>
<rect x="552" y="1056" width="26" height="180" fill="#111111"/>
<rect x="578" y="1056" width="26" height="180" fill="#424242"/>
<rect x="604" y="1056" width="26" height="180" fill="#212121"/>
<rect x="630" y="1056" width="26" height="180" fill="#212121"/>
<rect x="240" y="1082" width="26" height="180" fill="#424242"/>
<rect x="266" y="1082" width="26" height="180" fill="#212121"/>
<rect x="292" y="1082" width="26" height="180" fill="#212121"/>
<rect x="318" y="1082" width="26" height="180" fill="#212121"/>
<rect x="344" y="1082" width="26" height="180" fill="#212121"/>
<rect x="370" y="1082" width="26" height="180" fill="#111111"/>
<rect x="396" y="1082" width="26" height="180" fill="#424242"/>
<rect x="422" y="1082" width="26" height="180" fill="#212121"/>
<rect x="448" y="1082" width="26" height="180" fill="#212121"/>
<rect x="474" y="1082" width="26" height="180" fill="#212121"/>
<rect x="500" y="1082" width="26" height="180" fill="#212121"/>
<rect x="526" y="1082" width="26" height="180" fill="#111111"/>
<rect x="552" y="1082" width="26" height="180" fill="#424242"/>
<rect x="578" y="1082" width="26" height="180" fill="#212121"/>
<rect x="604" y="1082" width="26" height="180" fill="#212121"/>
<rect x="630" y="1082" width="26" height="180" fill="#212121"/>
<rect x="240" y="1108" width="26" height="180" fill="#212121"/>
<rect x="266" y="1108" width="26" height="180" fill="#212121"/>
<rect x="292" y="1108" width="26" height="180" fill="#212121"/>
<rect x="318" y="1108" width="26" height="180" fill="#111111"/>
<rect x="344" y="1108" width="26" height="180" fill="#424242"/>
<rect x="370" y="1108" width="26" height="180" fill="#212121"/>
<rect x="396" y="1108" width="26" height="180" fill="#212121"/>
<rect x="422" y="1108" width="26" height="180" fill="#212121"/>
<rect x="448" y="1108" width="26" height="180" fill="#212121"/>
<rect x="474" y="1108" width="26" height="180" fill="#111111"/>
<rect x="500" y="1108" width="26" height="180" fill="#424242"/>
<rect x="526" y="1108" width="26" height="180" fill="#212121"/>
<rect x="552" y="1108" width="26" height="180" fill="#212121"/>
<rect x="578" y="1108" width="26" height="180" fill="#212121"/>
<rect x="604" y="1108" width="26" height="180" fill="#212121"/>
<rect x="630" y="1108" width="26" height="180" fill="#111111"/>
<rect x="240" y="1134" width="26" height="180" fill="#212121"/>
<rect x="266" y="1134" width="26" height="180" fill="#111111"/>
<rect x="292" y="1134" width="26" height="180" fill="#424242"/>
<rect x="318" y="1134" width="26" height="180" fill="#212121"/>
<rect x="344" y="1134" width="26" height="180" fill="#212121"/>
<rect x="370" y="1134" width="26" height="180" fill="#212121"/>
<rect x="396" y="1134" width="26" height="180" fill="#212121"/>
<rect x="422" y="1134" width="26" height="180" fill="#111111"/>
<rect x="448" y="1134" width="26" height="180" fill="#424242"/>
<rect x="474" y="1134" width="26" height="180" fill="#212121"/>
<rect x="500" y="1134" width="26" height="180" fill="#212121"/>
<rect x="526" y="1134" width="26" height="180" fill="#212121"/>
<rect x="552" y="1134" width="26" height="180" fill="#212121"/>
<rect x="578" y="1134" width="26" height="180" fill="#111111"/>
<rect x="604" y="1134" width="26" height="180" fill="#424242"/>
<rect x="630" y="1134" width="26" height="180" fill="#212121"/>
<rect x="240" y="1160" width="26" height="180" fill="#424242"/>
<rect x="266" y="1160" width="26" height="180" fill="#212121"/>
<rect x="292" y="1160" width="26" height="180" fill="#212121"/>
<rect x="318" y="1160" width="26" height="180" fill="#212121"/>
<rect x="344" y="1160" width="26" height="180" fill="#212121"/>
<rect x="370" y="1160" width="26" height="180" fill="#111111"/>
<rect x="396" y="1160" width="26" height="180" fill="#424242"/>
<rect x="422" y="1160" width="26" height="180" fill="#212121"/>
<rect x="448" y="1160" width="26" height="180" fill="#212121"/>
<rect x="474" y="1160" width="26" height="180" fill="#212121"/>
<rect x="500" y="1160" width="26" height="180" fill="#212121"/>
<rect x="526" y="1160" width="26" height="180" fill="#111111"/>
<rect x="552" y="1160" width="26" height="180" fill="#424242"/>
<rect x="578" y="1160" width="26" height="180" fill="#212121"/>
<rect x="604" y="1160" width="26" height="180" fill="#212121"/>
<rect x="630" y="1160" width="26" height="180" fill="#212121"/>
<rect x="320" y="460" width="26" height="180" fill="#111111"/>
<rect x="346" y="460" width="26" height="180" fill="#424242"/>
<rect x="372" y="460" width="26" height="180" fill="#212121"/>
<rect x="398" y="460" width="26" height="180" fill="#212121"/>
<rect x="424" y="460" width="26" height="180" fill="#212121"/>
<rect x="450" y="460" width="26" height="180" fill="#212121"/>
<rect x="476" y="460" width="26" height="180" fill="#111111"/>
<rect x="502" y="460" width="26" height="180" fill="#424242"/>
<rect x="528" y="460" width="26" height="180" fill="#212121"/>
<rect x="554" y="460" width="26" height="180" fill="#212121"/>
<rect x="320" y="486" width="26" height="180" fill="#424242"/>
<rect x="346" y="486" width="26" height="180" fill="#212121"/>
<rect x="372" y="486" width="26" height="180" fill="#212121"/>
<rect x="398" y="486" width="26" height="180" fill="#212121"/>
<rect x="424" y="486" width="26" height="180" fill="#212121"/>
<rect x="450" y="486" width="26" height="180" fill="#424242"/>
<rect x="476" y="486" width="26" height="180" fill="#212121"/>
<rect x="502" y="486" width="26" height="180" fill="#212121"/>
<rect x="528" y="486" width="26" height="180" fill="#212121"/>
<rect x="554" y="486" width="26" height="180" fill="#212121"/>
<rect x="320" y="512" width="26" height="180" fill="#212121"/>
<rect x="346" y="512" width="26" height="180" fill="#212121"/>
<rect x="372" y="512" width="26" height="180" fill="#212121"/>
<rect x="398" y="512" width="26" height="180" fill="#111111"/>
<rect x="424" y="512" width="26" height="180" fill="#424242"/>
<rect x="450" y="512" width="26" height="180" fill="#212121"/>
<rect x="476" y="512" width="26" height="180" fill="#212121"/>
<rect x="502" y="512" width="26" height="180" fill="#212121"/>
<rect x="528" y="512" width="26" height="180" fill="#212121"/>
<rect x="554" y="512" width="26" height="180" fill="#111111"/>
<rect x="320" y="538" width="26" height="180" fill="#212121"/>
<rect x="346" y="538" width="26" height="180" fill="#111111"/>
<rect x="372" y="538" width="26" height="180" fill="#424242"/>
<rect x="398" y="538" width="26" height="180" fill="#212121"/>
<rect x="424" y="538" width="26" height="180" fill="#212121"/>
<rect x="450" y="538" width="26" height="180" fill="#212121"/>
<rect x="476" y="538" width="26" height="180" fill="#212121"/>
<rect x="502" y="538" width="26" height="180" fill="#111111"/>
<rect x="528" y="538" width="26" height="180" fill="#424242"/>
<rect x="554" y="538" width="26" height="180" fill="#212121"/>
<rect x="320" y="564" width="26" height="180" fill="#424242"/>
<rect x="346" y="564" width="26" height="180" fill="#212121"/>
<rect x="372" y="564" width="26" height="180" fill="#212121"/>
<rect x="398" y="564" width="26" height="180" fill="#212121"/>
<rect x="424" y="564" width="26" height="180" fill="#212121"/>
<rect x="450" y="564" width="26" height="180" fill="#111111"/>
<rect x="476" y="564" width="26" height="180" fill="#424242"/>
<rect x="502" y="564" width="26" height="180" fill="#212121"/>
<rect x="528" y="564" width="26" height="180" fill="#212121"/>
<rect x="554" y="564" width="26" height="180" fill="#212121"/>
<rect x="320" y="590" width="26" height="180" fill="#212121"/>
<rect x="346" y="590" width="26" height="180" fill="#212121"/>
<rect x="372" y="590" width="26" height="180" fill="#212121"/>
<rect x="398" y="590" width="26" height="180" fill="#111111"/>
<rect x="424" y="590" width="26" height="180" fill="#424242"/>
<rect x="450" y="590" width="26" height="180" fill="#212121"/>
<rect x="476" y="590" width="26" height="180" fill="#212121"/>
<rect x="502" y="590" width="26" height="180" fill="#212121"/>
<rect x="528" y="590" width="26" height="180" fill="#212121"/>
<rect x="554" y="590" width="26" height="180" fill="#111111"/>
<rect x="320" y="616" width="26" height="180" fill="#212121"/>
<rect x="346" y="616" width="26" height="180" fill="#111111"/>
<rect x="372" y="616" width="26" height="180" fill="#424242"/>
<rect x="398" y="616" width="26" height="180" fill="#212121"/>
<rect x="424" y="616" width="26" height="180" fill="#212121"/>
<rect x="450" y="616" width="26" height="180" fill="#212121"/>
<rect x="476" y="616" width="26" height="180" fill="#212121"/>
<rect x="502" y="616" width="26" height="180" fill="#111111"/>
<rect x="528" y="616" width="26" height="180" fill="#424242"/>
<rect x="554" y="616" width="26" height="180" fill="#212121"/>
<rect x="428" y="484" width="44" height="180" fill="#EC407A"/>
<rect x="335" y="532" width="70" height="180" fill="#EC407A"/>
<rect x="495" y="532" width="70" height="180" fill="#EC407A"/>
<rect x="370" y="590" width="14" height="180" fill="#eeeeee"/>
<rect x="386" y="590" width="14" height="180" fill="#111111"/>
<rect x="402" y="590" width="14" height="180" fill="#eeeeee"/>
<rect x="418" y="590" width="14" height="180" fill="#111111"/>
<rect x="434" y="590" width="14" height="180" fill="#eeeeee"/>
<rect x="450" y="590" width="14" height="180" fill="#111111"/>
<rect x="466" y="590" width="14" height="180" fill="#eeeeee"/>
<rect x="482" y="590" width="14" height="180" fill="#111111"/>
<rect x="498" y="590" width="14" height="180" fill="#eeeeee"/>
<rect x="514" y="590" width="14" height="180" fill="#111111"/>
<rect x="170" y="700" width="26" height="180" fill="#111111"/>
<rect x="196" y="700" width="26" height="180" fill="#424242"/>
<rect x="222" y="700" width="26" height="180" fill="#212121"/>
<rect x="248" y="700" width="26" height="180" fill="#212121"/>
<rect x="274" y="700" width="26" height="180" fill="#212121"/>
<rect x="300" y="700" width="26" height="180" fill="#212121"/>
<rect x="326" y="700" width="26" height="180" fill="#111111"/>
<rect x="352" y="700" width="26" height="180" fill="#424242"/>
<rect x="378" y="700" width="26" height="180" fill="#212121"/>
<rect x="404" y="700" width="26" height="180" fill="#212121"/>
<rect x="430" y="700" width="26" height="180" fill="#212121"/>
<rect x="456" y="700" width="26" height="180" fill="#212121"/>
<rect x="482" y="700" width="26" height="180" fill="#111111"/>
<rect x="508" y="700" width="26" height="180" fill="#424242"/>
<rect x="534" y="700" width="26" height="180" fill="#212121"/>
<rect x="560" y="700" width="26" height="180" fill="#212121"/>
<rect x="586" y="700" width="26" height="180" fill="#212121"/>
<rect x="612" y="700" width="26" height="180" fill="#212121"/>
<rect x="638" y="700" width="26" height="180" fill="#111111"/>
<rect x="664" y="700" width="26" height="180" fill="#424242"/>
<rect x="690" y="700" width="26" height="180" fill="#212121"/>
<rect x="170" y="726" width="26" height="180" fill="#424242"/>
<rect x="196" y="726" width="26" height="180" fill="#212121"/>
<rect x="222" y="726" width="26" height="180" fill="#212121"/>
<rect x="248" y="726" width="26" height="180" fill="#212121"/>
<rect x="274" y="726" width="26" height="180" fill="#212121"/>
<rect x="300" y="726" width="26" height="180" fill="#424242"/>
<rect x="326" y="726" width="26" height="180" fill="#212121"/>
<rect x="352" y="726" width="26" height="180" fill="#212121"/>
<rect x="378" y="726" width="26" height="180" fill="#212121"/>
<rect x="404" y="726" width="26" height="180" fill="#212121"/>
<rect x="430" y="726" width="26" height="180" fill="#111111"/>
<rect x="456" y="726" width="26" height="180" fill="#424242"/>
<rect x="482" y="726" width="26" height="180" fill="#212121"/>
<rect x="508" y="726" width="26" height="180" fill="#212121"/>
<rect x="534" y="726" width="26" height="180" fill="#212121"/>
<rect x="560" y="726" width="26" height="180" fill="#212121"/>
<rect x="586" y="726" width="26" height="180" fill="#111111"/>
<rect x="612" y="726" width="26" height="180" fill="#424242"/>
<rect x="638" y="726" width="26" height="180" fill="#212121"/>
<rect x="664" y="726" width="26" height="180" fill="#212121"/>
<rect x="690" y="726" width="26" height="180" fill="#212121"/>
<rect x="170" y="752" width="26" height="180" fill="#212121"/>
<rect x="196" y="752" width="26" height="180" fill="#212121"/>
<rect x="222" y="752" width="26" height="180" fill="#212121"/>
<rect x="248" y="752" width="26" height="180" fill="#111111"/>
<rect x="274" y="752" width="26" height="180" fill="#424242"/>
<rect x="300" y="752" width="26" height="180" fill="#212121"/>
<rect x="326" y="752" width="26" height="180" fill="#212121"/>
<rect x="352" y="752" width="26" height="180" fill="#212121"/>
<rect x="378" y="752" width="26" height="180" fill="#212121"/>
<rect x="404" y="752" width="26" height="180" fill="#111111"/>
<rect x="430" y="752" width="26" height="180" fill="#424242"/>
<rect x="456" y="752" width="26" height="180" fill="#212121"/>
<rect x="482" y="752" width="26" height="180" fill="#212121"/>
<rect x="508" y="752" width="26" height="180" fill="#212121"/>
<rect x="534" y="752" width="26" height="180" fill="#111111"/>
<rect x="560" y="752" width="26" height="180" fill="#424242"/>
<rect x="586" y="752" width="26" height="180" fill="#212121"/>
<rect x="612" y="752" width="26" height="180" fill="#212121"/>
<rect x="638" y="752" width="26" height="180" fill="#212121"/>
<rect x="664" y="752" width="26" height="180" fill="#212121"/>
<rect x="690" y="752" width="26" height="180" fill="#111111"/>
<rect x="352" y="892" width="196" height="180" fill="#EC407A"/>
<rect x="352" y="1040" width="196" height="180" fill="#EC407A"/>
<rect x="352" y="910" width="18" height="180" fill="#EC407A"/>
<rect x="530" y="910" width="18" height="180" fill="#EC407A"/>
<rect x="370" y="910" width="20" height="180" fill="#006064"/>
<rect x="390" y="910" width="20" height="180" fill="#00ACC1"/>
<rect x="410" y="910" width="20" height="180" fill="#00838F"/>
<rect x="430" y="910" width="20" height="180" fill="#00838F"/>
<rect x="450" y="910" width="20" height="180" fill="#00838F"/>
<rect x="470" y="910" width="20" height="180" fill="#00838F"/>
<rect x="490" y="910" width="20" height="180" fill="#006064"/>
<rect x="510" y="910" width="20" height="180" fill="#00ACC1"/>
<rect x="370" y="930" width="20" height="180" fill="#00ACC1"/>
<rect x="390" y="930" width="20" height="180" fill="#00838F"/>
<rect x="410" y="930" width="20" height="180" fill="#00838F"/>
<rect x="430" y="930" width="20" height="180" fill="#00838F"/>
<rect x="450" y="930" width="20" height="180" fill="#00838F"/>
<rect x="470" y="930" width="20" height="180" fill="#00ACC1"/>
<rect x="490" y="930" width="20" height="180" fill="#00838F"/>
<rect x="510" y="930" width="20" height="180" fill="#00838F"/>
<rect x="370" y="950" width="20" height="180" fill="#00838F"/>
<rect x="390" y="950" width="20" height="180" fill="#00838F"/>
<rect x="410" y="950" width="20" height="180" fill="#00838F"/>
<rect x="430" y="950" width="20" height="180" fill="#006064"/>
<rect x="450" y="950" width="20" height="180" fill="#00ACC1"/>
<rect x="470" y="950" width="20" height="180" fill="#00838F"/>
<rect x="490" y="950" width="20" height="180" fill="#00838F"/>
<rect x="510" y="950" width="20" height="180" fill="#00838F"/>
<rect x="370" y="970" width="20" height="180" fill="#00838F"/>
<rect x="390" y="970" width="20" height="180" fill="#006064"/>
<rect x="410" y="970" width="20" height="180" fill="#00ACC1"/>
<rect x="430" y="970" width="20" height="180" fill="#00838F"/>
<rect x="450" y="970" width="20" height="180" fill="#00838F"/>
<rect x="470" y="970" width="20" height="180" fill="#00838F"/>
<rect x="490" y="970" width="20" height="180" fill="#00838F"/>
<rect x="510" y="970" width="20" height="180" fill="#006064"/>
<rect x="370" y="990" width="20" height="180" fill="#00ACC1"/>
<rect x="390" y="990" width="20" height="180" fill="#00838F"/>
<rect x="410" y="990" width="20" height="180" fill="#00838F"/>
<rect x="430" y="990" width="20" height="180" fill="#00838F"/>
<rect x="450" y="990" width="20" height="180" fill="#00838F"/>
<rect x="470" y="990" width="20" height="180" fill="#006064"/>
<rect x="490" y="990" width="20" height="180" fill="#00ACC1"/>
<rect x="510" y="990" width="20" height="180" fill="#00838F"/>
<rect x="370" y="1010" width="20" height="180" fill="#00838F"/>
<rect x="390" y="1010" width="20" height="180" fill="#00838F"/>
<rect x="410" y="1010" width="20" height="180" fill="#00838F"/>
<rect x="430" y="1010" width="20" height="180" fill="#006064"/>
<rect x="450" y="1010" width="20" height="180" fill="#00ACC1"/>
<rect x="470" y="1010" width="20" height="180" fill="#00838F"/>
<rect x="490" y="1010" width="20" height="180" fill="#00838F"/>
<rect x="510" y="1010" width="20" height="180" fill="#00838F"/>
<rect x="235" y="1190" width="26" height="180" fill="#111111"/>
<rect x="261" y="1190" width="26" height="180" fill="#424242"/>
<rect x="235" y="1216" width="26" height="180" fill="#424242"/>
<rect x="261" y="1216" width="26" height="180" fill="#212121"/>
<rect x="235" y="1242" width="26" height="180" fill="#212121"/>
<rect x="261" y="1242" width="26" height="180" fill="#212121"/>
<rect x="235" y="1268" width="26" height="180" fill="#212121"/>
<rect x="261" y="1268" width="26" height="180" fill="#111111"/>
<rect x="235" y="1294" width="26" height="180" fill="#424242"/>
<rect x="261" y="1294" width="26" height="180" fill="#212121"/>
<rect x="235" y="1320" width="26" height="180" fill="#212121"/>
<rect x="261" y="1320" width="26" height="180" fill="#212121"/>
<rect x="325" y="1190" width="26" height="180" fill="#111111"/>
<rect x="351" y="1190" width="26" height="180" fill="#424242"/>
<rect x="325" y="1216" width="26" height="180" fill="#424242"/>
<rect x="351" y="1216" width="26" height="180" fill="#212121"/>
<rect x="325" y="1242" width="26" height="180" fill="#212121"/>
<rect x="351" y="1242" width="26" height="180" fill="#212121"/>
<rect x="325" y="1268" width="26" height="180" fill="#212121"/>
<rect x="351" y="1268" width="26" height="180" fill="#111111"/>
<rect x="325" y="1294" width="26" height="180" fill="#424242"/>
<rect x="351" y="1294" width="26" height="180" fill="#212121"/>
<rect x="325" y="1320" width="26" height="180" fill="#212121"/>
<rect x="351" y="1320" width="26" height="180" fill="#212121"/>
<rect x="415" y="1190" width="26" height="180" fill="#111111"/>
<rect x="441" y="1190" width="26" height="180" fill="#424242"/>
<rect x="415" y="1216" width="26" height="180" fill="#424242"/>
<rect x="441" y="1216" width="26" height="180" fill="#212121"/>
<rect x="415" y="1242" width="26" height="180" fill="#212121"/>
<rect x="441" y="1242" width="26" height="180" fill="#212121"/>
<rect x="415" y="1268" width="26" height="180" fill="#212121"/>
<rect x="441" y="1268" width="26" height="180" fill="#111111"/>
<rect x="415" y="1294" width="26" height="180" fill="#424242"/>
<rect x="441" y="1294" width="26" height="180" fill="#212121"/>
<rect x="415" y="1320" width="26" height="180" fill="#212121"/>
<rect x="441" y="1320" width="26" height="180" fill="#212121"/>
<rect x="505" y="1190" width="26" height="180" fill="#111111"/>
<rect x="531" y="1190" width="26" height="180" fill="#424242"/>
<rect x="505" y="1216" width="26" height="180" fill="#424242"/>
<rect x="531" y="1216" width="26" height="180" fill="#212121"/>
<rect x="505" y="1242" width="26" height="180" fill="#212121"/>
<rect x="531" y="1242" width="26" height="180" fill="#212121"/>
<rect x="505" y="1268" width="26" height="180" fill="#212121"/>
<rect x="531" y="1268" width="26" height="180" fill="#111111"/>
<rect x="505" y="1294" width="26" height="180" fill="#424242"/>
<rect x="531" y="1294" width="26" height="180" fill="#212121"/>
<rect x="505" y="1320" width="26" height="180" fill="#212121"/>
<rect x="531" y="1320" width="26" height="180" fill="#212121"/>
<rect x="595" y="1190" width="26" height="180" fill="#111111"/>
<rect x="621" y="1190" width="26" height="180" fill="#424242"/>
<rect x="595" y="1216" width="26" height="180" fill="#424242"/>
<rect x="621" y="1216" width="26" height="180" fill="#212121"/>
<rect x="595" y="1242" width="26" height="180" fill="#212121"/>
<rect x="621" y="1242" width="26" height="180" fill="#212121"/>
<rect x="595" y="1268" width="26" height="180" fill="#212121"/>
<rect x="621" y="1268" width="26" height="180" fill="#111111"/>
<rect x="595" y="1294" width="26" height="180" fill="#424242"/>
<rect x="621" y="1294" width="26" height="180" fill="#212121"/>
<rect x="595" y="1320" width="26" height="180" fill="#212121"/>
<rect x="621" y="1320" width="26" height="180" fill="#212121"/>
<rect x="294" y="434" width="26" height="180" fill="#E65100"/>
<rect x="294" y="408" width="26" height="180" fill="#FB8C00"/>
<rect x="294" y="382" width="26" height="180" fill="#FF7043"/>
<rect x="294" y="356" width="26" height="180" fill="#E53935"/>
<rect x="294" y="330" width="26" height="180" fill="#E65100"/>
<rect x="294" y="304" width="26" height="180" fill="#FB8C00"/>
<rect x="294" y="278" width="26" height="180" fill="#FF7043"/>
<rect x="294" y="252" width="26" height="180" fill="#E53935"/>
<rect x="294" y="226" width="26" height="180" fill="#E65100"/>
<rect x="294" y="200" width="26" height="180" fill="#FB8C00"/>
<rect x="580" y="434" width="26" height="180" fill="#E65100"/>
<rect x="580" y="408" width="26" height="180" fill="#FB8C00"/>
<rect x="580" y="382" width="26" height="180" fill="#FF7043"/>
<rect x="580" y="356" width="26" height="180" fill="#E53935"/>
<rect x="580" y="330" width="26" height="180" fill="#E65100"/>
<rect x="580" y="304" width="26" height="180" fill="#FB8C00"/>
<rect x="580" y="278" width="26" height="180" fill="#FF7043"/>
<rect x="580" y="252" width="26" height="180" fill="#E53935"/>
<rect x="580" y="226" width="26" height="180" fill="#E65100"/>
<rect x="580" y="200" width="26" height="180" fill="#FB8C00"/>
<rect x="379" y="291" width="143" height="180" fill="#EC407A"/>
<rect x="379" y="291" width="143" height="180" fill="none" stroke="#AD1457" stroke-width="8"/>
</svg>
    `,
    small_endermite: `
        <svg width="30" height="45" viewBox="0 0 800 1200" shape-rendering="crispEdges">
<rect x="220" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="292" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="412" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="460" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="400" width="24" height="24" fill="#8E24AA"/>
<rect x="268" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="400" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="400" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="400" width="24" height="24" fill="#4A148C"/>
<rect x="508" y="400" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="400" width="24" height="24" fill="#6A1B9A"/>
<rect x="310" y="350" width="180" height="120" fill="#D32F2F"/>
<rect x="300" y="550" width="200" height="120" fill="#111111"/>
</svg>
    `,
    the_endermite: `
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="180" viewBox="0 0 800 1200" shape-rendering="crispEdges">
<rect x="220" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="292" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="412" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="460" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="200" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="200" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="200" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="224" width="24" height="24" fill="#8E24AA"/>
<rect x="268" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="224" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="224" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="224" width="24" height="24" fill="#4A148C"/>
<rect x="508" y="224" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="224" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="248" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="248" width="24" height="24" fill="#4A148C"/>
<rect x="508" y="248" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="248" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="248" width="24" height="24" fill="#4A148C"/>
<rect x="220" y="272" width="24" height="24" fill="#8E24AA"/>
<rect x="244" y="272" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="272" width="24" height="24" fill="#8E24AA"/>
<rect x="292" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="272" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="272" width="24" height="24" fill="#8E24AA"/>
<rect x="412" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="272" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="272" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="272" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="296" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="296" width="24" height="24" fill="#4A148C"/>
<rect x="412" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="296" width="24" height="24" fill="#8E24AA"/>
<rect x="460" y="296" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="296" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="320" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="320" width="24" height="24" fill="#8E24AA"/>
<rect x="340" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="320" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="320" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="320" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="320" width="24" height="24" fill="#4A148C"/>
<rect x="556" y="320" width="24" height="24" fill="#4A148C"/>
<rect x="220" y="344" width="24" height="24" fill="#4A148C"/>
<rect x="244" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="344" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="344" width="24" height="24" fill="#4A148C"/>
<rect x="484" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="344" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="344" width="24" height="24" fill="#8E24AA"/>
<rect x="220" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="368" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="368" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="368" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="368" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="368" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="368" width="24" height="24" fill="#8E24AA"/>
<rect x="220" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="392" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="392" width="24" height="24" fill="#4A148C"/>
<rect x="388" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="392" width="24" height="24" fill="#4A148C"/>
<rect x="508" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="392" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="392" width="24" height="24" fill="#4A148C"/>
<rect x="220" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="416" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="416" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="416" width="24" height="24" fill="#8E24AA"/>
<rect x="412" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="416" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="416" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="416" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="440" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="440" width="24" height="24" fill="#8E24AA"/>
<rect x="364" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="440" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="440" width="24" height="24" fill="#8E24AA"/>
<rect x="460" y="440" width="24" height="24" fill="#4A148C"/>
<rect x="484" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="440" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="440" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="464" width="24" height="24" fill="#4A148C"/>
<rect x="244" y="464" width="24" height="24" fill="#8E24AA"/>
<rect x="268" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="464" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="464" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="464" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="464" width="24" height="24" fill="#4A148C"/>
<rect x="508" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="464" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="488" width="24" height="24" fill="#4A148C"/>
<rect x="316" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="488" width="24" height="24" fill="#8E24AA"/>
<rect x="412" y="488" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="488" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="488" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="488" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="512" width="24" height="24" fill="#4A148C"/>
<rect x="292" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="512" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="512" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="512" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="512" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="536" width="24" height="24" fill="#8E24AA"/>
<rect x="244" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="536" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="536" width="24" height="24" fill="#8E24AA"/>
<rect x="460" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="536" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="536" width="24" height="24" fill="#4A148C"/>
<rect x="220" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="560" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="560" width="24" height="24" fill="#4A148C"/>
<rect x="364" y="560" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="560" width="24" height="24" fill="#8E24AA"/>
<rect x="460" y="560" width="24" height="24" fill="#4A148C"/>
<rect x="484" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="560" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="560" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="584" width="24" height="24" fill="#8E24AA"/>
<rect x="340" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="584" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="584" width="24" height="24" fill="#8E24AA"/>
<rect x="460" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="584" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="584" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="608" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="608" width="24" height="24" fill="#8E24AA"/>
<rect x="292" y="608" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="608" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="608" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="608" width="24" height="24" fill="#4A148C"/>
<rect x="220" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="632" width="24" height="24" fill="#8E24AA"/>
<rect x="268" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="632" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="632" width="24" height="24" fill="#4A148C"/>
<rect x="364" y="632" width="24" height="24" fill="#4A148C"/>
<rect x="388" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="632" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="632" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="632" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="632" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="656" width="24" height="24" fill="#4A148C"/>
<rect x="292" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="656" width="24" height="24" fill="#8E24AA"/>
<rect x="340" y="656" width="24" height="24" fill="#4A148C"/>
<rect x="364" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="656" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="656" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="656" width="24" height="24" fill="#4A148C"/>
<rect x="556" y="656" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="680" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="680" width="24" height="24" fill="#4A148C"/>
<rect x="364" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="680" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="680" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="680" width="24" height="24" fill="#4A148C"/>
<rect x="556" y="680" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="704" width="24" height="24" fill="#8E24AA"/>
<rect x="316" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="704" width="24" height="24" fill="#4A148C"/>
<rect x="460" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="704" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="728" width="24" height="24" fill="#8E24AA"/>
<rect x="268" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="728" width="24" height="24" fill="#4A148C"/>
<rect x="316" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="728" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="728" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="728" width="24" height="24" fill="#4A148C"/>
<rect x="532" y="728" width="24" height="24" fill="#8E24AA"/>
<rect x="556" y="728" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="752" width="24" height="24" fill="#8E24AA"/>
<rect x="292" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="752" width="24" height="24" fill="#4A148C"/>
<rect x="436" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="752" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="752" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="752" width="24" height="24" fill="#4A148C"/>
<rect x="556" y="752" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="776" width="24" height="24" fill="#8E24AA"/>
<rect x="388" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="776" width="24" height="24" fill="#4A148C"/>
<rect x="436" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="776" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="800" width="24" height="24" fill="#4A148C"/>
<rect x="244" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="800" width="24" height="24" fill="#8E24AA"/>
<rect x="484" y="800" width="24" height="24" fill="#4A148C"/>
<rect x="508" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="800" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="824" width="24" height="24" fill="#4A148C"/>
<rect x="340" y="824" width="24" height="24" fill="#8E24AA"/>
<rect x="364" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="484" y="824" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="824" width="24" height="24" fill="#6A1B9A"/>
<rect x="220" y="848" width="24" height="24" fill="#8E24AA"/>
<rect x="244" y="848" width="24" height="24" fill="#4A148C"/>
<rect x="268" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="292" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="364" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="412" y="848" width="24" height="24" fill="#8E24AA"/>
<rect x="436" y="848" width="24" height="24" fill="#8E24AA"/>
<rect x="460" y="848" width="24" height="24" fill="#4A148C"/>
<rect x="484" y="848" width="24" height="24" fill="#8E24AA"/>
<rect x="508" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="532" y="848" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="848" width="24" height="24" fill="#4A148C"/>
<rect x="220" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="244" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="268" y="872" width="24" height="24" fill="#8E24AA"/>
<rect x="292" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="316" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="340" y="872" width="24" height="24" fill="#8E24AA"/>
<rect x="364" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="388" y="872" width="24" height="24" fill="#4A148C"/>
<rect x="412" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="436" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="460" y="872" width="24" height="24" fill="#4A148C"/>
<rect x="484" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="508" y="872" width="24" height="24" fill="#8E24AA"/>
<rect x="532" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="556" y="872" width="24" height="24" fill="#6A1B9A"/>
<rect x="310" y="560" width="180" height="120" fill="#D32F2F"/>
<rect x="300" y="760" width="200" height="120" fill="#111111"/>
</svg>
    `,
    
    // Pet sprites
    wolf: `
        <svg width="45" height="35" viewBox="0 0 45 35">
            <!-- Body -->
            <rect x="10" y="18" width="25" height="12" fill="#8B8680"/>
            <rect x="8" y="20" width="29" height="8" fill="#A0A0A0"/>
            <!-- Head -->
            <rect x="5" y="8" width="18" height="15" fill="#8B8680"/>
            <rect x="3" y="10" width="22" height="11" fill="#A0A0A0"/>
            <!-- Ears -->
            <rect x="6" y="3" width="6" height="8" fill="#696969"/>
            <rect x="16" y="3" width="6" height="8" fill="#696969"/>
            <!-- Eyes -->
            <rect x="9" y="12" width="3" height="3" fill="#000000"/>
            <rect x="16" y="12" width="3" height="3" fill="#000000"/>
            <rect x="10" y="13" width="1" height="1" fill="#FFFFFF"/>
            <rect x="17" y="13" width="1" height="1" fill="#FFFFFF"/>
            <!-- Nose -->
            <rect x="13" y="16" width="2" height="2" fill="#000000"/>
            <!-- Tail -->
            <rect x="35" y="15" width="8" height="6" fill="#8B8680"/>
            <!-- Legs -->
            <rect x="12" y="30" width="4" height="5" fill="#696969"/>
            <rect x="20" y="30" width="4" height="5" fill="#696969"/>
            <rect x="26" y="30" width="4" height="5" fill="#696969"/>
            <rect x="32" y="30" width="4" height="5" fill="#696969"/>
        </svg>
    `,
    
    snow_fox: `
        <svg width="40" height="30" viewBox="0 0 40 30">
            <!-- Body -->
            <rect x="8" y="15" width="22" height="10" fill="#FFFFFF"/>
            <rect x="6" y="17" width="26" height="6" fill="#F5F5F5"/>
            <!-- Head -->
            <rect x="3" y="6" width="16" height="12" fill="#FFFFFF"/>
            <rect x="1" y="8" width="20" height="8" fill="#F5F5F5"/>
            <!-- Ears -->
            <rect x="5" y="2" width="4" height="6" fill="#FFFFFF"/>
            <rect x="13" y="2" width="4" height="6" fill="#FFFFFF"/>
            <rect x="6" y="3" width="2" height="4" fill="#FFB6C1"/>
            <rect x="14" y="3" width="2" height="4" fill="#FFB6C1"/>
            <!-- Eyes -->
            <rect x="7" y="10" width="2" height="2" fill="#000000"/>
            <rect x="13" y="10" width="2" height="2" fill="#000000"/>
            <rect x="7.5" y="10.5" width="1" height="1" fill="#FFFFFF"/>
            <rect x="13.5" y="10.5" width="1" height="1" fill="#FFFFFF"/>
            <!-- Nose -->
            <rect x="10" y="13" width="2" height="1" fill="#000000"/>
            <!-- Tail -->
            <rect x="30" y="10" width="8" height="8" fill="#FFFFFF"/>
            <rect x="32" y="12" width="6" height="4" fill="#F5F5F5"/>
            <!-- Legs -->
            <rect x="10" y="25" width="3" height="4" fill="#DCDCDC"/>
            <rect x="16" y="25" width="3" height="4" fill="#DCDCDC"/>
            <rect x="22" y="25" width="3" height="4" fill="#DCDCDC"/>
            <rect x="27" y="25" width="3" height="4" fill="#DCDCDC"/>
        </svg>
    `,
    
    baby_ghast: `
        <svg width="35" height="35" viewBox="0 0 35 35">
            <!-- Main body (floating cube) -->
            <rect x="5" y="8" width="25" height="20" fill="#F8F8FF"/>
            <rect x="3" y="10" width="29" height="16" fill="#FFFFFF"/>
            <!-- Face -->
            <rect x="10" y="14" width="4" height="4" fill="#000000"/>
            <rect x="21" y="14" width="4" height="4" fill="#000000"/>
            <rect x="11" y="15" width="2" height="2" fill="#FF0000"/>
            <rect x="22" y="15" width="2" height="2" fill="#FF0000"/>
            <!-- Sad mouth -->
            <rect x="15" y="20" width="6" height="2" fill="#000000"/>
            <rect x="16" y="21" width="4" height="1" fill="#8B0000"/>
            <!-- Baby tentacles (shorter) -->
            <rect x="8" y="28" width="3" height="6" fill="#F0F8FF"/>
            <rect x="13" y="28" width="3" height="5" fill="#F0F8FF"/>
            <rect x="18" y="28" width="3" height="6" fill="#F0F8FF"/>
            <rect x="23" y="28" width="3" height="5" fill="#F0F8FF"/>
            <!-- Floating particles -->
            <rect x="2" y="5" width="1" height="1" fill="#DDA0DD" opacity="0.7"/>
            <rect x="32" y="6" width="1" height="1" fill="#DDA0DD" opacity="0.7"/>
            <rect x="1" y="15" width="1" height="1" fill="#DDA0DD" opacity="0.5"/>
            <rect x="33" y="20" width="1" height="1" fill="#DDA0DD" opacity="0.5"/>
        </svg>
    `,
    
    endermite: `
        <svg width="25" height="20" viewBox="0 0 25 20">
            <!-- Main body segments -->
            <rect x="3" y="8" width="8" height="6" fill="#1a1a2e"/>
            <rect x="9" y="7" width="8" height="8" fill="#16213e"/>
            <rect x="15" y="8" width="8" height="6" fill="#1a1a2e"/>
            <!-- Eyes -->
            <rect x="5" y="9" width="2" height="2" fill="#8b00ff"/>
            <rect x="8" y="9" width="2" height="2" fill="#8b00ff"/>
            <rect x="5.5" y="9.5" width="1" height="1" fill="#ffffff"/>
            <rect x="8.5" y="9.5" width="1" height="1" fill="#ffffff"/>
            <!-- Legs -->
            <rect x="2" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="6" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="10" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="14" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="18" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="22" y="14" width="2" height="3" fill="#0f0f23"/>
            <!-- Teleport particles -->
            <rect x="1" y="4" width="1" height="1" fill="#8b00ff" opacity="0.8"/>
            <rect x="23" y="3" width="1" height="1" fill="#8b00ff" opacity="0.7"/>
            <rect x="0" y="12" width="1" height="1" fill="#8b00ff" opacity="0.6"/>
            <rect x="24" y="15" width="1" height="1" fill="#8b00ff" opacity="0.8"/>
        </svg>
    `,
    
    polar_bear: `
        <svg width="50" height="40" viewBox="0 0 50 40">
            <!-- Body -->
            <rect x="10" y="20" width="30" height="15" fill="#F5F5F5"/>
            <rect x="8" y="22" width="34" height="11" fill="#FFFFFF"/>
            <!-- Head -->
            <rect x="5" y="8" width="20" height="18" fill="#F5F5F5"/>
            <rect x="3" y="10" width="24" height="14" fill="#FFFFFF"/>
            <!-- Ears -->
            <rect x="8" y="4" width="5" height="6" fill="#F5F5F5"/>
            <rect x="17" y="4" width="5" height="6" fill="#F5F5F5"/>
            <rect x="9" y="5" width="3" height="4" fill="#FFB6C1"/>
            <rect x="18" y="5" width="3" height="4" fill="#FFB6C1"/>
            <!-- Eyes -->
            <rect x="10" y="14" width="3" height="3" fill="#000000"/>
            <rect x="17" y="14" width="3" height="3" fill="#000000"/>
            <rect x="11" y="15" width="1" height="1" fill="#FFFFFF"/>
            <rect x="18" y="15" width="1" height="1" fill="#FFFFFF"/>
            <!-- Nose -->
            <rect x="14" y="18" width="2" height="2" fill="#000000"/>
            <!-- Legs -->
            <rect x="12" y="35" width="5" height="5" fill="#DCDCDC"/>
            <rect x="20" y="35" width="5" height="5" fill="#DCDCDC"/>
            <rect x="28" y="35" width="5" height="5" fill="#DCDCDC"/>
            <rect x="36" y="35" width="5" height="5" fill="#DCDCDC"/>
            <!-- Tail -->
            <rect x="40" y="24" width="6" height="4" fill="#F5F5F5"/>
        </svg>
    `,
    
    iron_golem: `
        <svg width="55" height="45" viewBox="0 0 55 45">
            <!-- Body -->
            <rect x="15" y="20" width="25" height="18" fill="#8C7853"/>
            <rect x="13" y="22" width="29" height="14" fill="#A0916B"/>
            <!-- Head -->
            <rect x="18" y="5" width="19" height="20" fill="#8C7853"/>
            <rect x="16" y="7" width="23" height="16" fill="#A0916B"/>
            <!-- Eyes -->
            <rect x="22" y="12" width="3" height="3" fill="#FFFF00"/>
            <rect x="30" y="12" width="3" height="3" fill="#FFFF00"/>
            <rect x="23" y="13" width="1" height="1" fill="#FFF"/>
            <rect x="31" y="13" width="1" height="1" fill="#FFF"/>
            <!-- Arms -->
            <rect x="5" y="18" width="12" height="8" fill="#8C7853"/>
            <rect x="38" y="18" width="12" height="8" fill="#8C7853"/>
            <rect x="7" y="20" width="8" height="4" fill="#A0916B"/>
            <rect x="40" y="20" width="8" height="4" fill="#A0916B"/>
            <!-- Legs -->
            <rect x="18" y="38" width="8" height="7" fill="#8C7853"/>
            <rect x="29" y="38" width="8" height="7" fill="#8C7853"/>
            <rect x="20" y="40" width="4" height="3" fill="#A0916B"/>
            <rect x="31" y="40" width="4" height="3" fill="#A0916B"/>
            <!-- Chest decoration -->
            <rect x="24" y="28" width="7" height="5" fill="#B8860B"/>
            <rect x="25" y="29" width="5" height="3" fill="#DAA520"/>
        </svg>
    `,
    
    baby_warden: `
        <svg width="40" height="35" viewBox="0 0 40 35">
            <!-- Body -->
            <rect x="8" y="18" width="24" height="12" fill="#0F3460"/>
            <rect x="6" y="20" width="28" height="8" fill="#16537e"/>
            <!-- Head -->
            <rect x="12" y="5" width="16" height="18" fill="#0F3460"/>
            <rect x="10" y="7" width="20" height="14" fill="#16537e"/>
            <!-- Chest sensors (glowing) -->
            <rect x="17" y="12" width="2" height="2" fill="#00FFFF"/>
            <rect x="21" y="12" width="2" height="2" fill="#00FFFF"/>
            <rect x="19" y="15" width="2" height="2" fill="#00FFFF"/>
            <!-- Eyes (glowing cyan) -->
            <rect x="15" y="10" width="2" height="3" fill="#00FFFF"/>
            <rect x="23" y="10" width="2" height="3" fill="#00FFFF"/>
            <rect x="15" y="11" width="1" height="1" fill="#87CEEB"/>
            <rect x="23" y="11" width="1" height="1" fill="#87CEEB"/>
            <!-- Arms -->
            <rect x="2" y="16" width="8" height="6" fill="#0F3460"/>
            <rect x="30" y="16" width="8" height="6" fill="#0F3460"/>
            <rect x="4" y="18" width="4" height="2" fill="#16537e"/>
            <rect x="32" y="18" width="4" height="2" fill="#16537e"/>
            <!-- Legs -->
            <rect x="12" y="30" width="6" height="5" fill="#0F3460"/>
            <rect x="22" y="30" width="6" height="5" fill="#0F3460"/>
            <rect x="14" y="32" width="2" height="1" fill="#16537e"/>
            <rect x="24" y="32" width="2" height="1" fill="#16537e"/>
            <!-- Spiky details -->
            <rect x="18" y="22" width="4" height="3" fill="#001122"/>
            <rect x="19" y="23" width="2" height="1" fill="#00FFFF"/>
        </svg>
    `,
    end_monstrosity: `
        <svg width="120" height="180" viewBox="0 0 800 1200" shape-rendering="crispEdges">
            <rect width="100%" height="100%" fill="transparent"/>
            <rect x="60" y="320" width="680" height="560" fill="#222222"/>
            <rect x="60" y="140" width="680" height="180" fill="#222222"/>
            <rect x="120" y="200" width="100" height="40" fill="#EC407A"/>
            <rect x="240" y="200" width="100" height="40" fill="#EC407A"/>
            <rect x="360" y="200" width="100" height="40" fill="#EC407A"/>
            <rect x="480" y="200" width="100" height="40" fill="#EC407A"/>
            <rect x="600" y="200" width="100" height="40" fill="#EC407A"/>
            <rect x="100" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="116" y="260" width="14" height="20" fill="#111111"/>
            <rect x="132" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="148" y="260" width="14" height="20" fill="#111111"/>
            <rect x="164" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="180" y="260" width="14" height="20" fill="#111111"/>
            <rect x="196" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="212" y="260" width="14" height="20" fill="#111111"/>
            <rect x="228" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="244" y="260" width="14" height="20" fill="#111111"/>
            <rect x="260" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="276" y="260" width="14" height="20" fill="#111111"/>
            <rect x="292" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="308" y="260" width="14" height="20" fill="#111111"/>
            <rect x="324" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="340" y="260" width="14" height="20" fill="#111111"/>
            <rect x="356" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="372" y="260" width="14" height="20" fill="#111111"/>
            <rect x="388" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="404" y="260" width="14" height="20" fill="#111111"/>
            <rect x="420" y="260" width="14" height="20" fill="#eeeeee"/>
            <rect x="436" y="260" width="14" height="20" fill="#111111"/>
            <rect x="-100" y="420" width="200" height="520" fill="#222222"/>
            <rect x="700" y="420" width="200" height="520" fill="#222222"/>
            <rect x="-80" y="790" width="120" height="120" fill="#EC407A"/>
            <rect x="760" y="790" width="120" height="120" fill="#EC407A"/>
            <rect x="320" y="440" width="160" height="200" fill="#0097A7"/>
            <rect x="270" y="440" width="40" height="40" fill="#EC407A"/>
            <rect x="490" y="440" width="40" height="40" fill="#EC407A"/>
            <rect x="270" y="490" width="40" height="40" fill="#EC407A"/>
            <rect x="490" y="490" width="40" height="40" fill="#EC407A"/>
            <rect x="270" y="540" width="40" height="40" fill="#EC407A"/>
            <rect x="490" y="540" width="40" height="40" fill="#EC407A"/>
            <rect x="360" y="390" width="40" height="40" fill="#EC407A"/>
            <rect x="360" y="650" width="40" height="40" fill="#EC407A"/>
            <rect x="410" y="390" width="40" height="40" fill="#EC407A"/>
            <rect x="410" y="650" width="40" height="40" fill="#EC407A"/>
            <rect x="80" y="880" width="120" height="280" fill="#222222"/>
            <rect x="220" y="880" width="120" height="280" fill="#222222"/>
            <rect x="380" y="880" width="120" height="280" fill="#222222"/>
            <rect x="520" y="880" width="120" height="280" fill="#222222"/>
            <rect x="360" y="900" width="30" height="200" fill="#222222"/>
            <rect x="410" y="900" width="30" height="200" fill="#222222"/>
            <rect x="60" y="-40" width="120" height="180" fill="#D32F2F"/>
            <rect x="620" y="-40" width="120" height="180" fill="#D32F2F"/>
            <rect x="180" y="50" width="440" height="30" fill="#6A1B9A"/>
            <rect x="320" y="-15" width="160" height="160" fill="#E91E63"/>
            <rect x="320" y="-15" width="160" height="160" fill="none" stroke="#AD1457" stroke-width="8"/>
        </svg>
    `,
    pink_square: `
        <svg width="30" height="30" viewBox="0 0 30 30" shape-rendering="crispEdges">
            <rect x="0" y="0" width="30" height="30" fill="#E91E63"/>
            <rect x="2" y="2" width="26" height="26" fill="#EC407A"/>
            <rect x="4" y="4" width="22" height="22" fill="#F06292"/>
            <rect x="6" y="6" width="18" height="18" fill="#F48FB1"/>
            <rect x="8" y="8" width="14" height="14" fill="#EC407A"/>
            <rect x="10" y="10" width="10" height="10" fill="#E91E63"/>
            <rect x="12" y="12" width="6" height="6" fill="#AD1457"/>
        </svg>
    `,
    baby_endermite: `
        <svg width="20" height="15" viewBox="0 0 20 15">
            <!-- Main body segments - smaller than regular endermite -->
            <rect x="2" y="6" width="6" height="4" fill="#1a1a2e"/>
            <rect x="7" y="5" width="6" height="6" fill="#16213e"/>
            <rect x="12" y="6" width="6" height="4" fill="#1a1a2e"/>
            <!-- Eyes -->
            <rect x="3.5" y="6.5" width="1.5" height="1.5" fill="#8b00ff"/>
            <rect x="6" y="6.5" width="1.5" height="1.5" fill="#8b00ff"/>
            <rect x="4" y="7" width="1" height="1" fill="#ffffff"/>
            <rect x="6.5" y="7" width="1" height="1" fill="#ffffff"/>
        </svg>
    `
    };

// Create sprite element
function createSprite(type, x, y) {
    const sprite = document.createElement('div');
    sprite.className = `sprite ${type}`;
    sprite.style.left = x + 'px';
    sprite.style.top = y + 'px';
    sprite.innerHTML = sprites[type === 'player' ? 'chicken' : type];
    return sprite;
}

// Get canvas dimensions
function getCanvasDimensions() {
    const canvas = document.getElementById('gameCanvas');
    return {
        width: canvas.offsetWidth,
        height: canvas.offsetHeight
    };
}