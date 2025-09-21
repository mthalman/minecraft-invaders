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
    wargen: `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Hood/Head with blue exterior -->
            <rect x="34" y="3" width="32" height="24" fill="#0066CC"/>
            <rect x="36" y="5" width="28" height="20" fill="#0055AA"/>

            <!-- Hood inner gold/yellow trim -->
            <rect x="40" y="8" width="20" height="2" fill="#FFD700"/>
            <rect x="40" y="8" width="2" height="14" fill="#FFD700"/>
            <rect x="58" y="8" width="2" height="14" fill="#FFD700"/>
            <rect x="40" y="20" width="20" height="2" fill="#FFD700"/>

            <!-- Face area (dark shadow under hood) -->
            <rect x="42" y="10" width="16" height="10" fill="#000000"/>

            <!-- Glowing red eyes -->
            <rect x="44" y="14" width="3" height="3" fill="#FF0000"/>
            <rect x="53" y="14" width="3" height="3" fill="#FF0000"/>
            <rect x="44.5" y="14.5" width="2" height="2" fill="#FFAAAA" opacity="0.8"/>
            <rect x="53.5" y="14.5" width="2" height="2" fill="#FFAAAA" opacity="0.8"/>

            <!-- Blue tunic/chest with gold trim -->
            <rect x="34" y="25" width="32" height="18" fill="#0066CC"/>
            <rect x="36" y="27" width="28" height="14" fill="#0055AA"/>

            <!-- Gold shoulder decorations -->
            <rect x="30" y="26" width="6" height="6" fill="#FFD700"/>
            <rect x="64" y="26" width="6" height="6" fill="#FFD700"/>

            <!-- Center gold emblem -->
            <rect x="47" y="30" width="6" height="6" fill="#FFD700"/>
            <rect x="48" y="31" width="4" height="4" fill="#FFA500"/>

            <!-- Brown belt with silver buckle -->
            <rect x="34" y="43" width="32" height="4" fill="#654321"/>
            <rect x="46" y="43" width="8" height="4" fill="#C0C0C0"/>
            <rect x="48" y="44" width="4" height="2" fill="#808080"/>

            <!-- Dark blue/gray pants -->
            <rect x="38" y="47" width="10" height="16" fill="#2C3E50"/>
            <rect x="52" y="47" width="10" height="16" fill="#2C3E50"/>
            <rect x="39" y="48" width="8" height="14" fill="#34495E"/>
            <rect x="53" y="48" width="8" height="14" fill="#34495E"/>

            <!-- Brown boots -->
            <rect x="36" y="63" width="12" height="10" fill="#654321"/>
            <rect x="52" y="63" width="12" height="10" fill="#654321"/>
            <rect x="37" y="71" width="10" height="5" fill="#8B4513"/>
            <rect x="53" y="71" width="10" height="5" fill="#8B4513"/>

            <!-- Arms with blue sleeves -->
            <rect x="26" y="32" width="8" height="14" fill="#0066CC"/>
            <rect x="66" y="32" width="8" height="14" fill="#0066CC"/>
            <rect x="27" y="33" width="6" height="12" fill="#0055AA"/>
            <rect x="67" y="33" width="6" height="12" fill="#0055AA"/>

            <!-- Gold wrist guards -->
            <rect x="26" y="44" width="8" height="3" fill="#FFD700"/>
            <rect x="66" y="44" width="8" height="3" fill="#FFD700"/>

            <!-- Hands/gloves -->
            <rect x="27" y="47" width="6" height="5" fill="#8B7355"/>
            <rect x="67" y="47" width="6" height="5" fill="#8B7355"/>
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
    nightmaresBite: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <defs>
                <radialGradient id="nightmareGlow" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#00FF00;stop-opacity:0.8" />
                    <stop offset="50%" style="stop-color:#008000;stop-opacity:0.6" />
                    <stop offset="100%" style="stop-color:#000000;stop-opacity:0.8" />
                </radialGradient>
                <filter id="nightmareGlowFilter">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Background dark circle -->
            <circle cx="20" cy="20" r="18" fill="url(#nightmareGlow)" filter="url(#nightmareGlowFilter)"/>

            <!-- Fang/tooth shape -->
            <path d="M 20,8 L 16,20 L 20,28 L 24,20 Z" fill="#FFFFFF" stroke="#CCCCCC" stroke-width="1"/>
            <path d="M 20,10 L 18,20 L 20,26 L 22,20 Z" fill="#F0F0F0"/>

            <!-- Dark veins on the fang -->
            <line x1="19" y1="12" x2="19" y2="24" stroke="#888888" stroke-width="0.5"/>
            <line x1="21" y1="12" x2="21" y2="24" stroke="#888888" stroke-width="0.5"/>

            <!-- Green mystical sparkles -->
            <circle cx="12" cy="12" r="1" fill="#00FF00" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="28" cy="14" r="1.5" fill="#00FF00" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="14" cy="28" r="1" fill="#00FF00" opacity="0.7">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="26" cy="26" r="1.2" fill="#00FF00" opacity="0.5">
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="2.2s" repeatCount="indefinite"/>
            </circle>
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
    piglin_legends: `
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
            <!-- Large ears -->
            <rect x="8" y="8" width="10" height="16" fill="#F4A460"/>
            <rect x="42" y="8" width="10" height="16" fill="#F4A460"/>
            <!-- Golden armor helmet -->
            <rect x="13" y="2" width="34" height="8" fill="#FFD700"/>
            <rect x="10" y="4" width="40" height="4" fill="#FFA500"/>
            <!-- Body with golden armor -->
            <rect x="18" y="30" width="24" height="20" fill="#B8860B"/>
            <rect x="15" y="33" width="30" height="14" fill="#DAA520"/>
            <!-- Golden chest plate -->
            <rect x="20" y="32" width="20" height="16" fill="#FFD700"/>
            <rect x="22" y="34" width="16" height="12" fill="#FFA500"/>
            <!-- Arms with armor -->
            <rect x="6" y="32" width="12" height="18" fill="#F4A460"/>
            <rect x="42" y="32" width="12" height="18" fill="#F4A460"/>
            <!-- Golden arm guards -->
            <rect x="8" y="34" width="8" height="4" fill="#FFD700"/>
            <rect x="44" y="34" width="8" height="4" fill="#FFD700"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#8B4513"/>
            <rect x="32" y="50" width="8" height="10" fill="#8B4513"/>
            <!-- Golden leg guards -->
            <rect x="22" y="52" width="4" height="6" fill="#FFD700"/>
            <rect x="34" y="52" width="4" height="6" fill="#FFD700"/>
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
    devourer: `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <!-- Base layer - gray stone with pink spots -->
            <rect x="25" y="80" width="70" height="25" fill="#C8C8C8"/>
            <rect x="30" y="85" width="8" height="4" fill="#D8A8D8"/>
            <rect x="45" y="88" width="6" height="6" fill="#E8B8E8"/>
            <rect x="65" y="86" width="8" height="5" fill="#D8A8D8"/>
            <rect x="80" y="90" width="5" height="4" fill="#E8B8E8"/>
            
            <!-- Middle body section -->
            <rect x="30" y="55" width="60" height="25" fill="#E0E0E0"/>
            <rect x="35" y="60" width="7" height="7" fill="#F8C8F8"/>
            <rect x="50" y="62" width="10" height="8" fill="#E8B8E8"/>
            <rect x="70" y="65" width="6" height="6" fill="#F8C8F8"/>
            
            <!-- Purple cube sections (main body) -->
            <rect x="20" y="35" width="30" height="20" fill="#8B4B8C"/>
            <rect x="70" y="35" width="30" height="20" fill="#8B4B8C"/>
            <rect x="22" y="37" width="26" height="16" fill="#A861A9"/>
            <rect x="72" y="37" width="26" height="16" fill="#A861A9"/>
            
            <!-- Top purple cube (head) -->
            <rect x="40" y="10" width="40" height="30" fill="#8B4B8C"/>
            <rect x="42" y="12" width="36" height="26" fill="#A861A9"/>
            
            <!-- Dark purple holes/eyes on head -->
            <rect x="48" y="18" width="8" height="8" fill="#4A2C4B"/>
            <rect x="64" y="18" width="8" height="8" fill="#4A2C4B"/>
            
            <!-- Small purple cube on top right -->
            <rect x="75" y="5" width="15" height="15" fill="#8B4B8C"/>
            <rect x="76" y="6" width="13" height="13" fill="#A861A9"/>
            <rect x="79" y="9" width="4" height="4" fill="#4A2C4B"/>
            
            <!-- Green slime drips -->
            <rect x="25" y="50" width="3" height="15" fill="#32CD32"/>
            <rect x="24" y="65" width="5" height="8" fill="#90EE90"/>
            
            <rect x="45" y="38" width="2" height="20" fill="#32CD32"/>
            <rect x="44" y="58" width="4" height="6" fill="#90EE90"/>
            
            <rect x="92" y="50" width="3" height="15" fill="#32CD32"/>
            <rect x="91" y="65" width="5" height="8" fill="#90EE90"/>
            
            <rect x="60" y="30" width="2" height="12" fill="#32CD32"/>
            <rect x="59" y="42" width="4" height="5" fill="#90EE90"/>
            
            <!-- Additional slime pools at base -->
            <rect x="15" y="100" width="12" height="5" fill="#90EE90"/>
            <rect x="50" y="102" width="8" height="3" fill="#32CD32"/>
            <rect x="85" y="100" width="10" height="5" fill="#90EE90"/>
            
            <!-- Face details on purple cubes -->
            <rect x="28" y="42" width="4" height="4" fill="#4A2C4B"/>
            <rect x="38" y="42" width="4" height="4" fill="#4A2C4B"/>
            <rect x="78" y="42" width="4" height="4" fill="#4A2C4B"/>
            <rect x="88" y="42" width="4" height="4" fill="#4A2C4B"/>
        </svg>
    `,
    slime: `
        <svg width="40" height="30" viewBox="0 0 40 30">
            <!-- Main body -->
            <ellipse cx="20" cy="20" rx="18" ry="12" fill="#32CD32"/>
            <ellipse cx="20" cy="18" rx="15" ry="10" fill="#90EE90"/>
            <!-- Inner core -->
            <ellipse cx="20" cy="18" rx="10" ry="6" fill="#228B22"/>
            <!-- Eyes -->
            <rect x="12" y="14" width="4" height="4" fill="#000"/>
            <rect x="24" y="14" width="4" height="4" fill="#000"/>
            <rect x="13" y="15" width="2" height="2" fill="#FFFFFF"/>
            <rect x="25" y="15" width="2" height="2" fill="#FFFFFF"/>
            <!-- Mouth -->
            <rect x="18" y="20" width="4" height="2" fill="#000"/>
            <!-- Bottom bounce effect -->
            <ellipse cx="20" cy="26" rx="16" ry="3" fill="#228B22" opacity="0.5"/>
        </svg>
    `,
    great_hog: `
        <svg width="140" height="120" viewBox="0 0 140 120">
            <!-- Main body - dark/black -->
            <rect x="35" y="50" width="70" height="40" fill="#1a1a1a"/>
            <rect x="30" y="55" width="80" height="30" fill="#2d2d2d"/>
            
            <!-- Red/crimson armor on body -->
            <rect x="40" y="52" width="60" height="35" fill="#8B2C3B"/>
            <rect x="45" y="55" width="50" height="28" fill="#A03344"/>
            <rect x="50" y="58" width="40" height="22" fill="#B84455"/>
            
            <!-- Golden armor trim -->
            <rect x="48" y="60" width="44" height="3" fill="#FFD700"/>
            <rect x="48" y="75" width="44" height="3" fill="#FFD700"/>
            <rect x="50" y="63" width="3" height="12" fill="#FFA500"/>
            <rect x="87" y="63" width="3" height="12" fill="#FFA500"/>
            
            <!-- Head - black with details -->
            <rect x="45" y="25" width="50" height="30" fill="#1a1a1a"/>
            <rect x="48" y="28" width="44" height="24" fill="#2d2d2d"/>
            
            <!-- Snout -->
            <rect x="40" y="35" width="25" height="15" fill="#2d2d2d"/>
            <rect x="35" y="38" width="20" height="10" fill="#1a1a1a"/>
            
            <!-- Tusks - beige/cream colored -->
            <rect x="25" y="40" width="8" height="20" fill="#F5DEB3"/>
            <rect x="28" y="42" width="4" height="16" fill="#FAEBD7"/>
            <rect x="107" y="40" width="8" height="20" fill="#F5DEB3"/>
            <rect x="108" y="42" width="4" height="16" fill="#FAEBD7"/>
            
            <!-- Tusk tips -->
            <polygon points="25,60 30,65 33,60" fill="#F5DEB3"/>
            <polygon points="107,60 110,65 115,60" fill="#F5DEB3"/>
            
            <!-- Eyes - pink/red -->
            <rect x="55" y="32" width="8" height="8" fill="#FF1493"/>
            <rect x="77" y="32" width="8" height="8" fill="#FF1493"/>
            <rect x="57" y="34" width="4" height="4" fill="#8B008B"/>
            <rect x="79" y="34" width="4" height="4" fill="#8B008B"/>
            
            <!-- Ears - beige -->
            <rect x="92" y="20" width="12" height="18" fill="#D2B48C"/>
            <rect x="36" y="20" width="12" height="18" fill="#D2B48C"/>
            <rect x="94" y="22" width="8" height="14" fill="#F5DEB3"/>
            <rect x="38" y="22" width="8" height="14" fill="#F5DEB3"/>
            
            <!-- Legs - black -->
            <rect x="40" y="85" width="15" height="25" fill="#1a1a1a"/>
            <rect x="85" y="85" width="15" height="25" fill="#1a1a1a"/>
            <rect x="42" y="87" width="11" height="21" fill="#2d2d2d"/>
            <rect x="87" y="87" width="11" height="21" fill="#2d2d2d"/>
            
            <!-- Hooves -->
            <rect x="40" y="105" width="15" height="8" fill="#4a4a4a"/>
            <rect x="85" y="105" width="15" height="8" fill="#4a4a4a"/>
            
            <!-- Back legs partially visible -->
            <rect x="60" y="88" width="12" height="20" fill="#1a1a1a" opacity="0.7"/>
            <rect x="68" y="88" width="12" height="20" fill="#1a1a1a" opacity="0.7"/>
            
            <!-- Weapon/spear held by hog -->
            <rect x="15" y="30" width="4" height="60" fill="#8B4513"/>
            <rect x="10" y="25" width="14" height="8" fill="#696969"/>
            <rect x="12" y="27" width="10" height="4" fill="#A9A9A9"/>
            
            <!-- Additional armor details -->
            <rect x="55" y="45" width="30" height="8" fill="#8B2C3B"/>
            <rect x="60" y="47" width="20" height="4" fill="#A03344"/>
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
    `,
    endersent: `
        <svg width="80" height="100" viewBox="0 0 80 100">
            <!-- Tall sentinel-like End creature -->
            <!-- Base/body -->
            <rect x="25" y="40" width="30" height="50" fill="#2a1b3d"/>
            <rect x="20" y="45" width="40" height="40" fill="#1a1a2e"/>
            
            <!-- Head -->
            <rect x="30" y="25" width="20" height="20" fill="#16213e"/>
            <rect x="25" y="30" width="30" height="15" fill="#2a1b3d"/>
            
            <!-- Eyes (purple glowing) -->
            <rect x="30" y="32" width="8" height="3" fill="#8b00ff"/>
            <rect x="42" y="32" width="8" height="3" fill="#8b00ff"/>
            <rect x="31" y="33" width="6" height="1" fill="#ffffff"/>
            <rect x="43" y="33" width="6" height="1" fill="#ffffff"/>
            
            <!-- Arms -->
            <rect x="15" y="50" width="8" height="30" fill="#1a1a2e"/>
            <rect x="57" y="50" width="8" height="30" fill="#1a1a2e"/>
            
            <!-- Teleport particles -->
            <rect x="10" y="85" width="3" height="3" fill="#8b00ff" opacity="0.7"/>
            <rect x="67" y="85" width="3" height="3" fill="#8b00ff" opacity="0.7"/>
            <rect x="15" y="90" width="2" height="2" fill="#d896ff" opacity="0.5"/>
            <rect x="63" y="90" width="2" height="2" fill="#d896ff" opacity="0.5"/>
        </svg>
    `,
    heart_of_ender: `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <!-- Dark menacing creature with glowing eyes based on provided image -->
            <!-- Main dark body - blocky shadowy form -->
            <rect x="30" y="25" width="60" height="45" fill="#0a0a0a"/>
            <rect x="25" y="35" width="70" height="25" fill="#1a1a1a"/>
            <rect x="35" y="20" width="50" height="55" fill="#0d0d0d"/>
            
            <!-- Additional dark mass for bulk -->
            <rect x="20" y="40" width="80" height="35" fill="#050505"/>
            <rect x="40" y="70" width="40" height="25" fill="#0a0a0a"/>
            
            <!-- Glowing purple/magenta eyes -->
            <rect x="40" y="35" width="12" height="8" fill="#ff00ff"/>
            <rect x="68" y="35" width="12" height="8" fill="#ff00ff"/>
            <!-- Eye glow effect -->
            <rect x="38" y="33" width="16" height="12" fill="#ff00ff" opacity="0.3"/>
            <rect x="66" y="33" width="16" height="12" fill="#ff00ff" opacity="0.3"/>
            
            <!-- Inner bright eye cores -->
            <rect x="42" y="37" width="8" height="4" fill="#ffffff"/>
            <rect x="70" y="37" width="8" height="4" fill="#ffffff"/>
            
            <!-- Menacing mouth/grin -->
            <rect x="45" y="50" width="6" height="3" fill="#ff00ff"/>
            <rect x="52" y="48" width="6" height="3" fill="#ff00ff"/>
            <rect x="58" y="50" width="6" height="3" fill="#ff00ff"/>
            <rect x="65" y="48" width="6" height="3" fill="#ff00ff"/>
            <!-- Mouth glow -->
            <rect x="44" y="47" width="28" height="8" fill="#ff00ff" opacity="0.2"/>
            
            <!-- Floating purple particles all around -->
            <rect x="10" y="15" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="105" y="20" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="15" y="85" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="100" y="90" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="5" y="45" width="2" height="2" fill="#d896ff" opacity="0.9"/>
            <rect x="112" y="50" width="2" height="2" fill="#d896ff" opacity="0.9"/>
            <rect x="8" y="75" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="110" y="35" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="20" y="10" width="2" height="2" fill="#ff00ff" opacity="0.6"/>
            <rect x="95" y="105" width="2" height="2" fill="#ff00ff" opacity="0.6"/>
        </svg>
    `,
    enderman_head: `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <!-- Floating Enderman head summoned by Heart of Ender -->
            <rect x="5" y="10" width="30" height="20" fill="#1a1a2e"/>
            <rect x="8" y="12" width="24" height="16" fill="#16213e"/>
            
            <!-- Eyes (purple glowing) -->
            <rect x="10" y="18" width="8" height="2" fill="#8b00ff"/>
            <rect x="22" y="18" width="8" height="2" fill="#8b00ff"/>
            <rect x="11" y="18.5" width="6" height="1" fill="#ffffff"/>
            <rect x="23" y="18.5" width="6" height="1" fill="#ffffff"/>
            
            <!-- Shadow effect -->
            <rect x="7" y="28" width="26" height="2" fill="#0a0a0a" opacity="0.5"/>
        </svg>
    `,
    pink_beam: `
        <svg width="30" height="8" viewBox="0 0 30 8">
            <!-- Pink energy beam shot by enderman heads -->
            <rect x="0" y="2" width="30" height="4" fill="#ff1493"/>
            <rect x="0" y="3" width="30" height="2" fill="#ff69b4"/>
            <rect x="0" y="3.5" width="30" height="1" fill="#ffffff"/>
        </svg>
    `,
    vengeful_heart_of_ender: `
        <svg width="140" height="140" viewBox="0 0 140 140">
            <!-- Vengeful Heart of Ender - tall vertical creature with purple flames -->
            <!-- Main vertical tower body - dark with purple highlights -->
            <rect x="55" y="15" width="30" height="80" fill="#1a0a2a"/>
            <rect x="60" y="20" width="20" height="70" fill="#2d1b3d"/>
            
            <!-- Upper body segments with glowing sections -->
            <rect x="50" y="25" width="40" height="8" fill="#2d1b3d"/>
            <rect x="55" y="27" width="30" height="4" fill="#4a1b5a"/>
            <rect x="60" y="28" width="20" height="2" fill="#8b00ff"/>
            
            <rect x="50" y="40" width="40" height="8" fill="#2d1b3d"/>
            <rect x="55" y="42" width="30" height="4" fill="#4a1b5a"/>
            <rect x="60" y="43" width="20" height="2" fill="#ff00ff"/>
            
            <rect x="50" y="55" width="40" height="8" fill="#2d1b3d"/>
            <rect x="55" y="57" width="30" height="4" fill="#4a1b5a"/>
            <rect x="60" y="58" width="20" height="2" fill="#8b00ff"/>
            
            <!-- Purple flames on top -->
            <polygon points="70,5 65,15 60,10 55,15 50,12 48,18 52,20 88,20 92,18 90,12 85,15 80,10 75,15" fill="#ff00ff"/>
            <polygon points="70,8 67,12 64,10 62,12 60,11 61,15 79,15 80,11 78,12 76,10 73,12" fill="#ffffff" opacity="0.5"/>
            
            <!-- Lower body/legs -->
            <!-- Left leg -->
            <rect x="45" y="90" width="15" height="35" fill="#2d1b3d"/>
            <rect x="47" y="95" width="11" height="30" fill="#1a0a2a"/>
            <rect x="49" y="100" width="7" height="20" fill="#4a1b5a"/>
            <rect x="50" y="115" width="5" height="3" fill="#ff00ff"/>
            
            <!-- Right leg -->
            <rect x="80" y="90" width="15" height="35" fill="#2d1b3d"/>
            <rect x="82" y="95" width="11" height="30" fill="#1a0a2a"/>
            <rect x="84" y="100" width="7" height="20" fill="#4a1b5a"/>
            <rect x="85" y="115" width="5" height="3" fill="#ff00ff"/>
            
            <!-- Central glowing core -->
            <rect x="65" y="65" width="10" height="10" fill="#8b00ff"/>
            <rect x="67" y="67" width="6" height="6" fill="#ff00ff"/>
            <rect x="69" y="69" width="2" height="2" fill="#ffffff"/>
            
            <!-- Floating particles -->
            <rect x="20" y="30" width="3" height="3" fill="#d896ff" opacity="0.8"/>
            <rect x="117" y="35" width="3" height="3" fill="#d896ff" opacity="0.8"/>
            <rect x="25" y="80" width="2" height="2" fill="#ff69b4" opacity="0.7"/>
            <rect x="115" y="85" width="2" height="2" fill="#ff69b4" opacity="0.7"/>
        </svg>
    `,
    corruptedBeacon: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Corrupted beacon base -->
            <rect x="15" y="45" width="30" height="15" fill="#2c2c54"/>
            <rect x="12" y="47" width="36" height="11" fill="#1a1a2e"/>
            <!-- Beacon pyramid -->
            <rect x="20" y="35" width="20" height="12" fill="#ff6b9d"/>
            <rect x="23" y="25" width="14" height="12" fill="#ff85aa"/>
            <rect x="26" y="15" width="8" height="12" fill="#ffa8c5"/>
            <!-- Corrupted crystal core -->
            <rect x="28" y="8" width="4" height="8" fill="#c44569"/>
            <!-- Dark corruption veins -->
            <rect x="18" y="40" width="2" height="8" fill="#40407a"/>
            <rect x="40" y="40" width="2" height="8" fill="#40407a"/>
            <rect x="25" y="32" width="2" height="6" fill="#40407a"/>
            <rect x="33" y="32" width="2" height="6" fill="#40407a"/>
            <!-- Glowing pink energy -->
            <rect x="22" y="30" width="16" height="2" fill="#ff006e" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite"/>
            </rect>
            <rect x="24" y="20" width="12" height="2" fill="#ff006e" opacity="0.8">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite"/>
            </rect>
            <!-- Energy particles -->
            <circle cx="18" cy="25" r="1" fill="#d896ff">
                <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="42" cy="28" r="1" fill="#d896ff">
                <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="12" r="1" fill="#ff69b4">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `,
    arrow: `
        <svg width="8" height="24" viewBox="0 0 8 24">
            <!-- Arrow shaft (vertical) -->
            <rect x="3" y="6" width="2" height="12" fill="#8B4513"/>
            <rect x="3.5" y="5" width="1" height="14" fill="#A0522D"/>
            <!-- Arrow point (top) -->
            <polygon points="4,0 1,6 7,6" fill="#C0C0C0"/>
            <polygon points="4,2 2,5.5 6,5.5" fill="#E6E6E6"/>
            <!-- Arrow fletching (bottom) -->
            <polygon points="1,18 3,18 3,21" fill="#228B22"/>
            <polygon points="5,18 5,21 7,18" fill="#228B22"/>
            <polygon points="1.5,18.5 3.5,18.5 3.5,20" fill="#32CD32"/>
            <polygon points="4.5,18.5 4.5,20 6.5,18.5" fill="#32CD32"/>
        </svg>
    `,
    bat: `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <filter id="greenGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <radialGradient id="batGlow" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#00FF00;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#00FF00;stop-opacity:0" />
                </radialGradient>
            </defs>

            <!-- Green glow aura -->
            <ellipse cx="12" cy="12" rx="11" ry="8" fill="url(#batGlow)" opacity="0.6"/>

            <!-- Bat body -->
            <ellipse cx="12" cy="12" rx="4" ry="6" fill="#1a1a1a"/>
            <ellipse cx="12" cy="11" rx="3" ry="4" fill="#000000"/>

            <!-- Left wing -->
            <path d="M 8,10 Q 4,8 2,10 Q 3,12 4,12 Q 5,13 6,12 Q 7,12 8,13 Z" fill="#1a1a1a" stroke="#00FF00" stroke-width="0.5" opacity="0.9"/>
            <path d="M 8,10 Q 5,9 3,10.5 Q 4,11.5 5,11.5 Q 6,12 7,11.5 Z" fill="#000000"/>

            <!-- Right wing -->
            <path d="M 16,10 Q 20,8 22,10 Q 21,12 20,12 Q 19,13 18,12 Q 17,12 16,13 Z" fill="#1a1a1a" stroke="#00FF00" stroke-width="0.5" opacity="0.9"/>
            <path d="M 16,10 Q 19,9 21,10.5 Q 20,11.5 19,11.5 Q 18,12 17,11.5 Z" fill="#000000"/>

            <!-- Bat head -->
            <ellipse cx="12" cy="9" rx="2.5" ry="2" fill="#1a1a1a"/>

            <!-- Ears -->
            <polygon points="10,8 9,6 10.5,7" fill="#1a1a1a"/>
            <polygon points="14,8 15,6 13.5,7" fill="#1a1a1a"/>

            <!-- Glowing green eyes -->
            <circle cx="11" cy="9" r="0.8" fill="#00FF00" filter="url(#greenGlow)"/>
            <circle cx="13" cy="9" r="0.8" fill="#00FF00" filter="url(#greenGlow)"/>

            <!-- Wing membrane details -->
            <line x1="4" y1="11" x2="7" y2="11" stroke="#00FF00" stroke-width="0.3" opacity="0.5"/>
            <line x1="20" y1="11" x2="17" y2="11" stroke="#00FF00" stroke-width="0.3" opacity="0.5"/>
        </svg>
    `,
    ricochetEgg: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Egg shell - metallic sheen -->
            <defs>
                <linearGradient id="metalEggGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#e0e0e0;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#ffffff;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#b0b0b0;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#808080;stop-opacity:1" />
                </linearGradient>
                <radialGradient id="ricochetGlow" cx="50%" cy="40%">
                    <stop offset="0%" style="stop-color:#ffff00;stop-opacity:0.8" />
                    <stop offset="50%" style="stop-color:#ffa500;stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#ff4500;stop-opacity:0.2" />
                </radialGradient>
            </defs>
            <!-- Main egg shape with metallic gradient -->
            <ellipse cx="30" cy="32" rx="18" ry="24" fill="url(#metalEggGradient)" stroke="#606060" stroke-width="1"/>
            <!-- Glowing energy core -->
            <ellipse cx="30" cy="30" rx="12" ry="16" fill="url(#ricochetGlow)" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Reflective highlights -->
            <ellipse cx="25" cy="20" rx="6" ry="8" fill="#ffffff" opacity="0.6"/>
            <ellipse cx="35" cy="40" rx="3" ry="4" fill="#ffff99" opacity="0.4"/>
            <!-- Bounce energy indicators -->
            <rect x="28" y="10" width="4" height="2" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="28" y="50" width="4" height="2" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="30" width="2" height="4" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="48" y="30" width="2" height="4" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `,
    heartstealerEgg: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Red egg with heart theme -->
            <defs>
                <radialGradient id="redEggGradient" cx="50%" cy="40%">
                    <stop offset="0%" style="stop-color:#ff6b9d;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#dc143c;stop-opacity:1" />
                    <stop offset="80%" style="stop-color:#8b0000;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4b0000;stop-opacity:1" />
                </radialGradient>
                <filter id="heartGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main egg shape -->
            <ellipse cx="30" cy="32" rx="20" ry="26" fill="url(#redEggGradient)" stroke="#4b0000" stroke-width="1"/>
            <!-- Heart symbol in center -->
            <path d="M 30,25 C 25,20 15,20 20,30 L 30,40 L 40,30 C 45,20 35,20 30,25 Z"
                  fill="#ffffff" opacity="0.8" filter="url(#heartGlow)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
            </path>
            <!-- Reflective highlight -->
            <ellipse cx="24" cy="22" rx="5" ry="7" fill="#ffb3c1" opacity="0.5"/>
            <!-- Pulsing life energy -->
            <circle cx="30" cy="32" r="25" fill="none" stroke="#ff1744" stroke-width="1" opacity="0.3">
                <animate attributeName="r" values="20;28;20" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Small hearts floating around -->
            <path d="M 15,15 C 14,14 12,14 13,15 L 15,17 L 17,15 C 18,14 16,14 15,15 Z"
                  fill="#ff69b4" opacity="0.6">
                <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M 45,45 C 44,44 42,44 43,45 L 45,47 L 47,45 C 48,44 46,44 45,45 Z"
                  fill="#ff69b4" opacity="0.6">
                <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin="1s" repeatCount="indefinite"/>
            </path>
        </svg>
    `,
    stormlander: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Storm cloud base -->
            <defs>
                <radialGradient id="stormGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#4a5568;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#2d3748;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a202c;stop-opacity:1" />
                </radialGradient>
                <filter id="lightningGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main storm orb -->
            <circle cx="30" cy="30" r="25" fill="url(#stormGradient)" stroke="#4299e1" stroke-width="2"/>
            <!-- Lightning bolt symbol -->
            <path d="M 22,15 L 32,15 L 26,30 L 35,30 L 20,50 L 28,30 L 20,30 Z"
                  fill="#ffd700" stroke="#ffed4a" stroke-width="1" filter="url(#lightningGlow)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="0.8s" repeatCount="indefinite"/>
            </path>
            <!-- Electric sparks around the orb -->
            <circle cx="45" cy="20" r="2" fill="#60a5fa" opacity="0.8">
                <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="15" cy="45" r="2" fill="#60a5fa" opacity="0.8">
                <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="1.5" fill="#a78bfa" opacity="0.6">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="10" cy="15" r="1.5" fill="#a78bfa" opacity="0.6">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            <!-- Storm energy ring -->
            <circle cx="30" cy="30" r="20" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.4">
                <animate attributeName="r" values="20;24;20" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `,
    swiftness: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Potion bottle base -->
            <defs>
                <linearGradient id="swiftnessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#3b82f6;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#1d4ed8;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
                </radialGradient>
                <filter id="potionGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Bottle neck -->
            <rect x="26" y="8" width="8" height="12" fill="#4b5563" stroke="#374151" stroke-width="1"/>
            <!-- Cork/stopper -->
            <rect x="24" y="5" width="12" height="6" fill="#8b4513" stroke="#654321" stroke-width="1" rx="2"/>
            <!-- Main bottle body -->
            <path d="M 18,20 L 42,20 L 40,50 L 20,50 Z"
                  fill="url(#swiftnessGradient)" stroke="#1e40af" stroke-width="2" filter="url(#potionGlow)"/>
            <!-- Bottle highlight -->
            <path d="M 22,22 L 26,22 L 25,45 L 23,45 Z" fill="#60a5fa" opacity="0.6"/>
            <!-- Potion liquid with bubbles -->
            <path d="M 20,23 L 40,23 L 38,48 L 22,48 Z" fill="#3b82f6" opacity="0.8"/>
            <!-- Speed effect bubbles -->
            <circle cx="28" cy="30" r="2" fill="#bfdbfe" opacity="0.8">
                <animate attributeName="cy" values="45;25;45" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="32" cy="35" r="1.5" fill="#dbeafe" opacity="0.7">
                <animate attributeName="cy" values="45;20;45" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="40" r="1" fill="#e0f2fe" opacity="0.6">
                <animate attributeName="cy" values="45;25;45" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
            </circle>
            <!-- Speed lines around bottle -->
            <path d="M 10,25 L 16,25" stroke="#60a5fa" stroke-width="2" opacity="0.6">
                <animate attributeName="opacity" values="0;0.8;0" dur="0.8s" repeatCount="indefinite"/>
            </path>
            <path d="M 44,30 L 50,30" stroke="#60a5fa" stroke-width="2" opacity="0.6">
                <animate attributeName="opacity" values="0.8;0;0.8" dur="0.8s" repeatCount="indefinite"/>
            </path>
            <path d="M 12,35 L 18,35" stroke="#3b82f6" stroke-width="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0;0.6;0" dur="1s" begin="0.2s" repeatCount="indefinite"/>
            </path>
            <path d="M 42,40 L 48,40" stroke="#3b82f6" stroke-width="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" begin="0.2s" repeatCount="indefinite"/>
            </path>
        </svg>
    `,
    harpCrossbow: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Crossbow base -->
            <defs>
                <linearGradient id="harpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#a0522d;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="stringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#c0c0c0;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#c0c0c0;stop-opacity:1" />
                </linearGradient>
                <filter id="harpGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main crossbow body -->
            <rect x="25" y="15" width="10" height="35" fill="url(#harpGradient)" stroke="#654321" stroke-width="1"/>
            <!-- Trigger mechanism -->
            <rect x="23" y="35" width="14" height="8" fill="#8b4513" stroke="#654321" stroke-width="1" rx="2"/>
            <!-- Crossbow arms -->
            <rect x="5" y="12" width="50" height="6" fill="url(#harpGradient)" stroke="#654321" stroke-width="1" rx="3"/>
            <!-- Harp strings (3 strings for 3 arrows) -->
            <line x1="8" y1="15" x2="52" y2="15" stroke="url(#stringGradient)" stroke-width="1" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
            </line>
            <line x1="8" y1="18" x2="52" y2="18" stroke="url(#stringGradient)" stroke-width="1" opacity="0.7">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1.3s" begin="0.2s" repeatCount="indefinite"/>
            </line>
            <line x1="8" y1="21" x2="52" y2="21" stroke="url(#stringGradient)" stroke-width="1" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.1s" begin="0.4s" repeatCount="indefinite"/>
            </line>
            <!-- Musical notes floating around -->
            <text x="50" y="10" font-family="serif" font-size="8" fill="#ff69b4" opacity="0.8">♪</text>
            <text x="10" y="30" font-family="serif" font-size="6" fill="#9370db" opacity="0.7">♫</text>
            <text x="45" y="45" font-family="serif" font-size="7" fill="#ff1493" opacity="0.6">♪</text>
            <!-- Animated musical notes -->
            <text x="35" y="5" font-family="serif" font-size="5" fill="#4169e1" opacity="0.8">♬
                <animate attributeName="y" values="5;2;5" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
            </text>
            <!-- Arrow rest -->
            <rect x="28" y="25" width="4" height="2" fill="#654321"/>
            <!-- Decorative harp-like elements -->
            <circle cx="15" cy="15" r="2" fill="#ffd700" stroke="#ffed4a" stroke-width="1" opacity="0.8"/>
            <circle cx="45" cy="15" r="2" fill="#ffd700" stroke="#ffed4a" stroke-width="1" opacity="0.8"/>
            <!-- String vibration effect -->
            <path d="M 8,15 Q 30,12 52,15" stroke="#ffffff" stroke-width="0.5" fill="none" opacity="0.5">
                <animate attributeName="d" values="M 8,15 Q 30,12 52,15; M 8,15 Q 30,18 52,15; M 8,15 Q 30,12 52,15" dur="0.5s" repeatCount="indefinite"/>
            </path>
        </svg>
    `,
    hungryHorror: `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Red block body with gradient -->
            <defs>
                <radialGradient id="horrorGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
                    <stop offset="70%" style="stop-color:#8b0000;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4b0000;stop-opacity:1" />
                </radialGradient>
                <filter id="horrorGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main body -->
            <rect x="10" y="15" width="40" height="35" fill="url(#horrorGradient)" stroke="#2b0000" stroke-width="2" rx="3"/>
            <!-- Darker inner area for mouth -->
            <rect x="15" y="25" width="30" height="20" fill="#2b0000" rx="2"/>
            <!-- Yellow glowing eyes -->
            <circle cx="20" cy="22" r="4" fill="#ffff00" filter="url(#horrorGlow)">
                <animate attributeName="r" values="4;5;4" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="22" r="4" fill="#ffff00" filter="url(#horrorGlow)">
                <animate attributeName="r" values="4;5;4" dur="1s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Black pupils -->
            <circle cx="20" cy="22" r="2" fill="#000000"/>
            <circle cx="40" cy="22" r="2" fill="#000000"/>
            <!-- Sharp teeth top row -->
            <polygon points="17,30 20,25 23,30" fill="#ffffff"/>
            <polygon points="23,30 26,25 29,30" fill="#ffffff"/>
            <polygon points="29,30 32,25 35,30" fill="#ffffff"/>
            <polygon points="35,30 38,25 41,30" fill="#ffffff"/>
            <polygon points="41,30 44,25 47,30" fill="#ffffff"/>
            <!-- Sharp teeth bottom row -->
            <polygon points="17,40 20,45 23,40" fill="#ffffff"/>
            <polygon points="23,40 26,45 29,40" fill="#ffffff"/>
            <polygon points="29,40 32,45 35,40" fill="#ffffff"/>
            <polygon points="35,40 38,45 41,40" fill="#ffffff"/>
            <polygon points="41,40 44,45 47,40" fill="#ffffff"/>
            <!-- Hungry mouth animation -->
            <rect x="18" y="32" width="24" height="6" fill="#000000">
                <animate attributeName="height" values="6;8;6" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <!-- Drool effect -->
            <ellipse cx="25" cy="46" rx="2" ry="3" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="46;50;46" dur="2s" repeatCount="indefinite"/>
            </ellipse>
        </svg>
    `,
    tinyHorror: `
        <svg width="30" height="30" viewBox="0 0 30 30">
            <!-- Tiny red block body -->
            <rect x="5" y="8" width="20" height="18" fill="#cc0000" stroke="#660000" stroke-width="1" rx="2"/>
            <!-- Dark mouth area -->
            <rect x="8" y="14" width="14" height="10" fill="#330000" rx="1"/>
            <!-- Yellow eyes -->
            <circle cx="10" cy="12" r="2" fill="#ffff00">
                <animate attributeName="opacity" values="1;0.7;1" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20" cy="12" r="2" fill="#ffff00">
                <animate attributeName="opacity" values="1;0.7;1" dur="0.8s" begin="0.4s" repeatCount="indefinite"/>
            </circle>
            <!-- Tiny pupils -->
            <circle cx="10" cy="12" r="1" fill="#000000"/>
            <circle cx="20" cy="12" r="1" fill="#000000"/>
            <!-- Small teeth -->
            <polygon points="9,16 11,14 13,16" fill="#ffffff"/>
            <polygon points="14,16 16,14 18,16" fill="#ffffff"/>
            <polygon points="19,16 21,14 23,16" fill="#ffffff"/>
            <polygon points="9,22 11,24 13,22" fill="#ffffff"/>
            <polygon points="14,22 16,24 18,22" fill="#ffffff"/>
            <polygon points="19,22 21,24 23,22" fill="#ffffff"/>
            <!-- Chomping animation -->
            <rect x="10" y="18" width="10" height="2" fill="#000000">
                <animate attributeName="height" values="2;3;2" dur="0.3s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `
    };

// Create sprite element
function createSprite(type, x, y) {
    const sprite = document.createElement('div');
    sprite.className = `sprite ${type}`;
    sprite.style.left = x + 'px';
    sprite.style.top = y + 'px';
    sprite.innerHTML = sprites[type === 'player' ? game.selectedSkin : type];
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