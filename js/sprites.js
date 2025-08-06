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