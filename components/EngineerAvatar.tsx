'use client';
import { motion } from 'motion/react';

type Props = { compact?: boolean; talking?: boolean };
export default function EngineerAvatar({compact = false, talking = true}: Props) {
  return (
    <motion.svg viewBox="0 0 430 445" role="img" aria-label="Friendly animated software engineer working with a laptop" className={compact ? 'engineer-avatar compact' : 'engineer-avatar'} initial={{ opacity: 0, y: 26 }} animate={{opacity:1,y:0}} transition={{duration:.7}}>
      <defs>
        <linearGradient id="hoodie" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#8D81FF"/><stop offset="1" stopColor="#513DE0"/></linearGradient>
        <linearGradient id="screen" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#232444"/><stop offset="1" stopColor="#121326"/></linearGradient>
        <filter id="avatarShadow"><feGaussianBlur stdDeviation="14"/></filter>
      </defs>
      <ellipse cx="216" cy="408" rx="158" ry="21" fill="#151538" opacity=".36" filter="url(#avatarShadow)"/>
      <motion.g animate={{y:[0,-7,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>
        <circle cx="213" cy="185" r="134" fill="#7666FA" opacity=".12"/>
        <circle cx="213" cy="185" r="109" fill="none" stroke="#968BFC" strokeWidth="1" strokeDasharray="6 11" opacity=".35"/>
        {/* Torso and hood */}
        <path d="M106 363 Q103 269 153 239 Q184 222 214 224 Q249 221 279 245 Q323 273 324 363Z" fill="url(#hoodie)"/>
        <path d="M161 240 Q214 294 269 239 L251 300 Q213 316 180 297Z" fill="#4032B1" opacity=".38"/>
        <path d="M194 238 L195 290 M237 238 L235 290" stroke="#C6BDFF" strokeWidth="4" strokeLinecap="round"/>
        {/* Neck */}
        <rect x="190" y="211" width="48" height="51" rx="17" fill="#DB8E6C"/>
        {/* Hair behind head */}
        <path d="M141 150 Q131 77 197 68 Q268 51 288 124 Q295 184 264 217 L154 206Z" fill="#191B39"/>
        {/* Ears and face */}
        <ellipse cx="149" cy="168" rx="14" ry="23" fill="#D99573"/>
        <ellipse cx="278" cy="168" rx="14" ry="23" fill="#D99573"/>
        <path d="M156 129 Q166 90 216 91 Q265 87 271 136 L266 200 Q258 245 213 250 Q167 246 159 203Z" fill="#EDB18C"/>
        {/* Hair swoosh */}
        <path d="M153 142 Q140 89 186 75 Q223 55 254 80 Q284 86 278 144 Q260 124 245 100 Q218 132 175 128 Q165 136 153 142Z" fill="#1E213E"/>
        <path d="M181 89 Q220 64 251 90" stroke="#3B3D5A" strokeWidth="8" strokeLinecap="round" fill="none" opacity=".7"/>
        {/* Eyebrows */}
        <path d="M175 164 Q190 158 202 165 M230 165 Q243 158 257 164" stroke="#392D36" strokeWidth="5" strokeLinecap="round" fill="none"/>
        {/* Eyes blinking */}
        <motion.g animate={{scaleY:[1,1,1,.1,1]}} transition={{duration:5,repeat:Infinity,times:[0,.78,.82,.85,1]}} style={{transformOrigin:'214px 176px'}}>
          <ellipse cx="190" cy="179" rx="5" ry="7" fill="#29283B"/>
          <ellipse cx="244" cy="179" rx="5" ry="7" fill="#29283B"/>
        </motion.g>
        <path d="M214 185 Q210 196 216 199" stroke="#BC7D62" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <motion.path d={talking ? 'M200 215 Q216 228 233 214' : 'M203 216 Q217 222 231 216'} stroke="#904F52" strokeWidth="3.5" strokeLinecap="round" fill="none" animate={talking ? {d:['M200 215 Q216 225 233 214','M202 214 Q217 234 232 213','M200 215 Q216 225 233 214']} : {}} transition={{repeat:Infinity,duration:1.2}}/>
        <ellipse cx="173" cy="198" rx="13" ry="6" fill="#F08D8F" opacity=".26"/><ellipse cx="258" cy="198" rx="13" ry="6" fill="#F08D8F" opacity=".26"/>
        {/* Right waving arm */}
        <motion.g style={{transformOrigin:'289px 278px'}} animate={{rotate:[-5,11,-5]}} transition={{duration:1.7,repeat:Infinity,ease:'easeInOut'}}>
          <path d="M280 266 Q316 245 332 214 L351 171 Q356 159 366 165 Q379 175 374 188 L363 249 Q345 299 312 313Z" fill="#6755E9"/>
          <path d="M347 184 Q344 161 350 135 Q353 122 360 132 L363 157 L374 115 Q379 105 385 114 L381 155 L393 129 Q400 121 405 131 L393 170 Q407 153 412 164 Q416 172 394 195 L369 212Z" fill="#EDB18C"/>
        </motion.g>
        {/* Left forearm */}
        <path d="M151 275 Q117 289 105 340 L167 353 L183 320Z" fill="#7464F4"/>
        {/* laptop */}
        <rect x="104" y="301" width="229" height="104" rx="12" fill="url(#screen)" stroke="#555778" strokeWidth="3"/>
        <path d="M85 402 H352 Q344 418 323 418 H114 Q93 418 85 402Z" fill="#565B80"/>
        <path d="M190 402 H250 L244 410 H197Z" fill="#8187A9"/>
        <rect x="128" y="317" width="82" height="5" rx="2.5" fill="#55E4C7" opacity=".9"/>
        <rect x="128" y="333" width="122" height="5" rx="2.5" fill="#8A87FF" opacity=".86"/>
        <rect x="128" y="348" width="96" height="5" rx="2.5" fill="#FFB56B" opacity=".84"/>
        <rect x="128" y="364" width="141" height="5" rx="2.5" fill="#688DFF" opacity=".6"/>
        <path d="M285 346 L298 359 L285 372 M275 372 H292" fill="none" stroke="#7BF0D5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.g>
    </motion.svg>
  );
}
