Clash of Clans API Example
==========================

Currently it takes a clan tag to the CLI, it then searches for all clans
with the same location and with at least the same clan level, and returns
a ranking of them by war wins.

NOTE: Because SuperCell haven't enabled paging in their API yet, the results
aren't accurate, but it shows an example of how to use the API and the kind of
things that will be possible.

Example:
--------

    mat@aurora:~/code/clashofclans$ node_modules/.bin/babel-node cli.js "#90JJLUCQ"
    Clans in United Kingdom, minimum clan level 8
    ==========================================
    
    1. uk united [9] - 238
    2. ENGLISH ARMY♚ [9] - 231
    3. Black Widowz [9] - 224
    4. Baller Baller [8] - 222
    5. MUFC [9] - 217
    6. Mdl forever [8] - 216
    7. clanage [8] - 216
    8. Trigger Happy [8] - 215
    9. Bang Bus [9] - 214
    10. ADULT ! A [9] - 210
    11. cN.UK [8] - 207
    12. FDC [8] - 206
    13. braver warriors [8] - 204
    14. Miller Time [8] - 204
    15. GivMeDemCookies [9] - 203
    16. #Waraways [9] - 203
    17. Mental Scots [9] - 198
    18. PERMIRIFICUS I [8] - 196
    19. Sheldon Massive [9] - 195
    20. Back of the net [9] - 193
    21. hunters [8] - 189
    22. Atomic Jocks [8] - 187
    23. Dorset COC [8] - 187
    24. hulkz [8] - 186
    25. 1 cannon magic [9] - 186
    26. Pinoy Ninja [8] - 185
    27. BIG O'S SMASH [8] - 185
    28. Scotland [9] - 184
    29. Inferno Kings [9] - 183
    30. BiffBangPow [8] - 181
    31. Ulster [9] - 181
    32. clannabis smoke [8] - 181
    33. 6Inches Of Fury [8] - 180
    34. The K Bombs [8] - 180
    35. Cymru -WalesWar [8] - 179
    36. 17 Dragons [10] - 179
    37. Bolt!!! [8] - 178
    38. bsvn war [8] - 178
    39. Phil.Bully.Gang [9] - 178
    40. VERY HARD [8] - 177
    41. RedDevilLegends [8] - 177
    42. **STOKE_UK_VN** [8] - 175
    43. army of brits [8] - 174
    44. AxsWarriors [9] - 174
    45. INDIAN HUNK 2 [8] - 173
    46. Dynamite chaos [8] - 172
    47. 蓝灵会 [8] - 172
    48. BALLERS92 [8] - 171
    49. mini armageddon [9] - 171
    50. YORKSHIRE PUDS [8] - 171
    51. rawganics [8] - 171
    52. Chicky [8] - 170
    53. Hell Blazers [8] - 170
    54. WATP [8] - 170
    55. Spartan Glory! [8] - 169
    56. DrySpoon [8] - 169
    57. Super Soldiers [8] - 168
    58. RAGING PHOENIX [9] - 168
    59. Monkeyface [9] - 168
    60. Immortal Force [8] - 167
    61. House Moorego [8] - 167
    62. Shaolin Killers [8] - 167
    63. Pogba Dogs [8] - 166
    64. LONDON X50 [9] - 165
    65. sheffield 2013 [8] - 164
    66. OutOfTheAshes [8] - 162
    67. tiny terrorists [10] - 162
    68. uk vietnamese [8] - 162
    69. DAMN.I♥MDO™ [8] - 161
    70. Yellow & Violet [8] - 161
    71. The Rebellion [8] - 160
    72. The Anunnaki'sΔ [8] - 160
    73. ↗️Kiss Of Death [9] - 160
    74. Venum Elite [8] - 159
    75. 50Clan-Warriors [8] - 159
    76. bruvas of kaos [8] - 159
    77. Ab'Salute'War [8] - 159
    78. Zoo Bombers [8] - 158
    79. jacobs clan [8] - 158
    80. notnowkids [9] - 158
    81. Slappa Da Bass [8] - 158
    82. kAlde[r]0 [8] - 157
    83. london [8] - 157
    84. #Invincibles# [8] - 157