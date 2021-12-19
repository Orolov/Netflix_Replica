let elemn1 = document.getElementById("1")
let elemn2 = document.getElementById("2")
let elemn3 = document.getElementById("3")
let elemn4 = document.getElementById("4")
let elemn5 = document.getElementById("5")
let elemn6 = document.getElementById("6")
let elemn7 = document.getElementById("7")
let elemn8 = document.getElementById("8")

let i = 0

let urls = [
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABasnTUbdfuEcWsKVPjzF2_IhN_SxknGMnuKOEnpHT_UY4okztZ7OgW3wkv0mZIkCvVFH6pSOLMFG0kIFNcOea3ewWgc.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbMpmdRFLsm0hWJwvoNlGWctDlvITDSA2OCQQcbnqWy6DZDIKaD8BtM9zhi93WzGAJZ2hREqFnufcDC3VTaQBAPS8yLwxQEzheVnGTvBkQP5zMjc6ancRGNzFhxo.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf-CzEqwa-EA40SVX-1Bf1l75RPucqY17HZRtInS_lfJXeou8fxkQo4pyzdSxCE_UPfhvuAsQXuUESMDWUK2ZU896zk.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcW3OmieAnqwboNBSnHND722hVI3eiegej0vtoWvq5j8UZZ2ONAfHO-I-jxStQZPkPx-i69CgKtjvyXI2kBW8KZv8o3WMr2jWkg4R3bo5KzTkxlad_-FnOMN5owh.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVbjFngujWzn4af1G3BPFK3A2J6SrnvAgxHbs0vwlMy0O2FAqlHM0lh6rvL-6qCBsrTUN3u_ZA4TYZlEfIrVD4N9-HNmpNXJDkuQrST1nmGwAUAfG0qk4NapJyFM.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoc6qxOhBu3sOTTDhvMFc1Deas3rg-XHZ3efNg0v_VsexOSsX0yBDadhHRE6Ip9pDDSG9ICBb-Olsg_dMFinkMPILU0EnjSuQfo2z9VjIAtSdbF8hFlyIK-ebBx.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVdaCeLrAO2tn1CZdf8UzF5BQDddDSid6gH8xNYDc87TJ8CWQIf8uQ6DHhTWn8Xxap8uG-jPJjNru6MEpqwaGX3qWY0.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUtEEDf4atT2_seTReQiF2G88r5Z7Exi_1QTDOA7H95umdlvqmd2_q76Qdej2LaP6VhaxK8MmrRLtnbu1AYFhiHH2SCyXNKaboKGF-D7A7iLfSXgILO6AK5HhCsp.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkxS98eSa4E2jxTy0UHAbyb4LiUCbmfysU3JWIm1e3TnmDHsTHtMA1B33BxeGEU0dr3bAMHQdNoTQHwNhiLTULBRvDJadV69N4gTJ3KZTVC3dWOhdo1svZUYz4sDRyxClYNp-yOxt4p5SzMr2s2R_jQY_7YORAftRGsS1Os9qTQwhQn4MiZxm3XxaW8rfjruiXYChG-6ABsZs5_0x46evS6.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfzTqXkNMuh1jHpiBqKQ5E5JT33Grg2rIWDxccFZgk_Mi5FDBg_iNFGGY-DshiFgqivpEB3use8fMx-XbCYNvY9eohc6-wg5Sd63hB9_SA6vMjjaStz6VcnZcw0QQMp7Z2J85tg8hLcdDfvG6iza3Hb8zFY1YGNvjJcbn6esqK8Mt2Q9nF_d1uHy17a8Z8TC5bHxke8e0Ul8X7qkcch0Sm-a.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUXj2d4fLzUc0WrZaKS1kXiRfOIoOsaSyQLTq7gbUEKeXbvKysFIluKYdLJswfNwdSDrsOB40-z9KmvKTnQab9dlfL3n2zrtTSpt3UoOvjecQoclNSlc4VYHPoLLRGxV7G3RVXXR09ExM2NTzxqBSFXOQEAFgG0u1PcrjCWP_K_cG3zbyhzzEI0.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd6ltosYxP4LMu8G9vh2xbiR4JgWkRSqLgnHDjwGbMLCtRD6auHbfJd4g2Eb9aY5ScwOt0tbxqiTDd-9iLnfuOY9yGw.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa3pqSK_GFw7cFuIf4JNT37CmdZjXR2MIl33gunSFF_EMCl9ichVEwKpwTsxzUla_vONMTP_fOHSlPqRD4PHCX_rpmU.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcQL8o8WtdkwvsBoikw6gPk1yT_mDeO_Xv7vsG5JG0skKMfl2tALyWFyD3a96x-3LDVguR84qKpLDoc5AKYJV7u20iE.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaWcxdepawUTKkTEubY9mVciM8U3-fyxUG2M5RSD9Q7iEJOqRaezuvK_vkJ8n-8XaW4q9vRfy1r7NebyKwdm0u4tpsg.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcc67hkvjl2uam6veNJYVaPNN_o-NBe86H8eWq-Dx7Kd3HkwUjr23DVhjzA8NXXajPiXPqBdR2FXAkn8D2E8HznhCQM.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbTPeWCyDwxo0VyHDZ3lCNcfGlkDucjLc03ZhBfUD_ZyhvfRfvPw8fWFVurWIzKtH5f48oZ8Di_5_cM94Y8DJWZZ0Ks.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYsP4G552Q3K_jx6BKm5zTtUqnSDAV4rSEpow6r82QCfdDOM1GZ_gRH-pyOaSUlYaolFc2gpdgvkPxJuEZB3QQVAeZiPQZCY-Xq0qA7GX7tWV-RN6fylcDSP6dyg.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSZyebS8px6I7gou12Uh4wk3Hb4_jT8KduzCH1kaDNIgwYKUugHZhgHBPQ_dbtgedlTQjDJUqWfKLTFM2oatJubrDzr1uvgNnJW19DJu_PoERLcHKx6Mrt8IcQMY.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSHPIHXOQ8RSbvAcJ2g4JFwS05E9tO2NAP7UIhQrUJv0gSUS1P8wjfQHQStMLb9jKkWTa9XNmp7hNN5EaeYEoso9o6PodOLyAUX1leRhczbrJ3A-bUq7nm3FzsLd.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRSBA3hmOFpMgYt_sj4jRtVo4OGIDgWKlI2H7ZNfqQy-RZMtNowSJXhe2QOHJMr0WtM7i9eaBm9A2INORHWTZeX93fb7lmcia2YsyH1cJYL3Sm3DdyoQbq_RbHkB.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWfGBBRNCFpjrUuK9M0BAnyOAlexF2jS-_BPXh7uL1Dmvxbj0KNVBa47v6aUI1EElwd4RHbHxnnUFW7EqOEOQNi5nQU.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQOdKKZgzs1aAZ11OGFlKT6ekZjWo4krahzSGV3e0kfOVBpdXEXFg4MPHXkEOVc7I___3e7zLr8QcQ7TmPnKAQ6KW_RScE-puMX03afSptPAT1uCxg91rDt6j6kM.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYWp5AGSJVmacQAhcsf0h3w6Tr07GTlbO5VDEtW5CPK0hCw4DLphYyTsQfKNkzwd_i9FrmAdgjuRH9Ww3wKUHfqLd7Y.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXsF1pWKfl4O0wSc_3FliUQMfRVFE5eZ08ve5sox1TrdxQ-qNbaNtRvgCmsLE6x2JBDUO4S0n3YVxTEhwuRAoxj1p2k.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXKKPe5fsnrKFnQ6kc59QMgzfHrvQekCt0sO4o3XNJLMB6QJIUN3yl9Eyam9ZIu4ZgC7szgPD7338uAMLO-ji2CeeK8.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbgvDQGyxIEwJbfnBjbzoUiY4JAczJhNkL9Fgm2MO4umMyAcKQqWRRgrgr-gJMTj9EIV7oSSdHxfxWyMjQ5gka-VNYm6p14qL9mQ9pKeehc7_O-W79l276H2gCvo.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd0_fcObIUnuV04_T9qchjZHklA-ZY8Vjg7xYQs2cSQFtbF6yIDDMubeD4kQ2UWo4_fp4SR_CgSyvZTcCVFMDF5Gkqs.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT2GQf41WjwrHZArzL5nCJdlzRsAeNVr54LT3bbN0xgIMdlukcowvmnUJXBurZC0vSHNTR5g1xgnBvXB7rJsu60BA0I.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc_sygbnfDAx5hNlJiqer9HN4CSGYJ5PaV6JhHDYEdOoDKOXhLuW9jZR7DMoM81Isev9d98FBNaBV-sxKJ6zp9iDzUx5VtJ1_qSvLNp1eOemcLX_PvEwxUwKMMakzVhMLjqRrR0vb5Dhyimc7IOvFNjn3plxaEdASwuUZ8rkRVdY9AbvVxgznzDKax2AlZLDg3BGh7dK2WucVGs1Flggemzn.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDx0nZAuQewdxkQgqmuJJMxZ9fF_rUYiQW5-icY8MCkFrUAGoDyeDB9FWtixSd1tW3yu0zZPI4AQ9qTIuNTqoGePEk.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy0LZbkpa02_VXhOwHcsvYEvIgJMtMoujRJQjZ-3T284LEAWIpSaB25aesxq-_DKNgNTYHql8ALEhkbkluz-imlgHg.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYuNraBjUVrww1ItKQyUnk-5ttG5rKb_4bW0oOqlf8SiQOcaIbvK5rq5YYHFlvoHXo7gUY67zZ7WfNCq7M3Fu6ZVqzzMRh5FTlektvE3BK4kmnSQ9w5EwcTx9E2O.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfLUDx5hbPBgFBRgiXs8n4gxpJNga8kxqv4gb0FDOKvsF-P9tgvcZgmvi59SacY-VP7DvB2nlUCh4i8GWGyXENb_dJo.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWTcKduKDMSP31Daj_gYXe76vFUp1TUarc4eEnmqn63FxLOIeQzaISIxtLFCc1P_yMDGqejHDRtWdCaakpX-xH2NF6w.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW_yExkseX4Bw-AcWQlyTknQ9WquDJjf_8OYlhVTx1A2gCCJBNcYW0UXvPk2Uk3SwJWN270IH8OeattS-HZeOT_WEOA.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWgsuPQskDrX5Pn0I5Vgw5Zm3V1gCJvTzWMvvcYlrZt1Yq5fS2FB4jh8q9Qe4jGubj3qtOWi8ZYic6NtemG3DwVimwQ.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRg8CkLSJ46uRyIXRTyGm8e-QG90PG0MzNQifm1gEscWRZKk45rSsDlpmNJbFMdLpVzF71kEwsACKs40K3S0xtrLh2i1l7ispcpkSBWGgCY_aqPAkEhp_dE2OeGF.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQn0EPtp9IjBLd07kkd26hPnTowGld_MUgx-Rd5UFht9mDIp_NyIcyuTCZfqlp8cpenFoLdLo96rFX6lKytmJwmUQ5Y.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVA5Iyr1ZdSeiFSI-ciUQ4XIGrX9Skrsfn5VHp0UvBzBYx9Z2iKyoD0ZCLVdh5n2DlKJt4ClTnsQryosbYhRYoZMElTou5smfzbVxN9Gr3-zZQwyD1uy3h9nnQ3D.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTYAv9kzxzcXRRcJ22VoV99YOex6QgdTkWZlt7M7Fw4pBEnF3fb_hy_F6au_SR_mvg_oy4H2muMmVTZECTObvdO4gEyaoWDfqZ1b_J3i2RT9ekvBRxwM9bDfJ2uM.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXoVYwCweOktnEinijwszRPS1hkE5aTD8OZCyDm2ijvD8tePKjqFGwLRCV2EUCgurNSFi2fnunig0mtCq7wzuF6Yq-c.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqFTSb5Og6Jk2QuOJEPXQzbJyiPxuqR6Ep_kjPtKY3ZBt7qOdLWSWZidhoQjLfLllW3t-p-0X93StIsFqZtQpYRKpCcGC82WNqJrq3c7_1fYeSL49OLdpDxFPti.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWYVrgtX99DIwv-QurUry04Y6UPzDAWl9ISG_Rng58TiOmY_a3OFaApVdHigK4GaRIQuhTxGBNuScfZSjPXAyUx0vOp4M8l1O1m7zUev76Fb9p1_acCP8r8XIgSi.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7Al_PxMTwJgVYjBslvBJK4sDXKT9hJKK73dW1wILO1rj27z54dPJYfc0gDW7I3T_Llmr63HGystcPp95TxxQzMOJ8.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQtQk3FUgfJyI9Cm2dzcGbKxa-tOkqmOiAmC7pFpUFxISiMLuyOn3hMqTWsHjxEnMEgagfqvM-IPlh-fsQmnggSlo4c.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRgeD2FaMNEGLjy3K-iN5JKsikgXtv10_gSk6lYfhkC5QcgaiV5tIXJA46Ev2WMwZa10ZuQaQJKfhK5j4kLRLzdH-IqulQ51n4Z_Zi0vP_y9T9exg5G2lhDox5KK.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU1zkN8bLTc2NvAt01Fm37UMDd46LlJ9czfJqX7ddCUOmXx3hqSry5qH233qeOlBp05RqcrbrICsJ4si2XCl74k1wOE.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQxADPQ_Nr_btC7hwA6P3OwY5NQbRQ2KDUPeE2lodA_hZC8B_kfagAGGqr_WiA809JgSbKN0IPj7tokCV6WKGC82m26hRiO56aQaUzxMaYpnaQZ56mMfTIQEuoZC.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSGcXqSyJaBBNl2-8TmzsTBKEtp70nXUkJE39UbloRJssTAcEsFW4GV18XlKAi06qvfWpOm7lDey6sfrmtbDL8YWrpSVPxu3twgwPL3AP7OBx0dDENPlShkbKhcm.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTkJmpCJoHbr7x8_WzLCRH-lqW5ZgTkL-69B1dnxwD9bVRUEWqhjPt1rtLh0yoTfAMxMYk7PHQ0XkF2vq0I2h_tUvD53U_FS3KcNruQEg1JdbP76FBp_Sf2xnmI8.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWM-ThuMHuODFwtVKWa-n7lypDdMcnw-NV9zrOeIy1jiD5dJlgDiL7hx5NORFmd8O-nOo5GWuWx7gHHT06cCXCeAnt0.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZPEtdeqKUQ5rLN9H5XZdFL-KrDQ4Jk_RtshyY4L9Jmj1aFGalFVGpvIoGXQVY6fvHp3rnHJFT4KvD0zL2qHyKpCg5w.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT48l-LWYEmzX-Y5W1BnTK0CgT9Lid2hFkCrHvrd9JD6mJI2HZROFjx52AxqsavcXoUDjcnjqB9w1Iwmx2UlM73iq9faGnKc93Ws3aPu0WZO6xMVhNROzGVZseMDH_07por9oqBlQ2u_SyAQcIFPnK9qpALGthiY7cTs7Kc14O5TN1ukJDoYlZ0.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABejiu0bunlPVeY4GOLueC210L9CSPaKMrssy3F9bO5bVijq2rpr_V54h85H6Jii4c4UGmLbCZAKFg-CnZieLXRdLnZQ.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY18MeUY-HN6KUojr6s9V1QFUgoP_mKJLKnq5ci2N2i0u4NeyXqBZn3tgRygZslL6lFGVDEK_-pkUzuPZI8qPrQ0UlY.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd8uDXY-XcEhnaju4TN8ya_5CJChnScjVbsgT3r0KavDIMuelejR4c__vyL4ZnDp7hj9Cyjg9ev5mALqGdBkV1_Bc_odxOh5CNZBFB8-6dp5NbJBh2dpbnQzY217.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6RzkOc_3OnshD8_NzKc-kYhQqaaIEVSV0M0lRN6E98F9HbEd8ovAZb-32fFrvQ7Mf684O6UloT2m-i6RhB96F8gHs.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRkiiI9x8pKJRFTKhcyi5uJ46fzBNbvadiTbcNZXcg608n7M0YgEHS0jXIONS4rHlVrKm3EABb1o8FvQxQjbzc_MOp2LAhWW3t15DAivukx1Ce-0pJSRoEoT7RzH.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbSYyLRzPEpHjvn6Sg1vLFiUAR0mslYO7u3UceY-4zscCVLhgRworAhpeIKdwnMRGzb0pg-g6B91ybqVe-IrOcW1kTM.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbyXdDE7adO9b-pfW0zWQr3UK0JrPfDNZdCfhu7n9ROn9qSfKSVPLdDcHoiBD5xY66EePJJdnuG_5laYv7uKB99RLCpSSHfXZp_5jSmfw6W90HQMwEN8WUD2fvRV.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfJMmyJjl2gDT87rjrNEaYIEIOdBLmjIeuVDsPL6JAsXlLhTlbcbQDgpfZFuv1Klp9Ywi_3cFYzpE1tvQQudWfE1FrI.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfaTtvOiCn90Tz1Fsrfzf11V4OrfVQ0QItLlOnpY8r-dfGKDJIAbqn17IWU9gbAXJPcDc47CuUJAvlaa-HJu6oRRUgY.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYBhWJj-T-srEbwTO-R8ulHaOJcZIkjaAds47wFa-f5e4Djf50GjBJPqww6-3Y2xWe-9aQbxU2S51KhW0ocNYH2cZ-_VXOqb0g7j-a-fEwKSH_Fko9XnlnvOluoy.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVPhqp6P7W0lO_EBMFzXMJb4ujP6zjPuc-riLsLGsqR4X-vtjawL4_EZQQmtjz7d3fzc9YpCosCEDrV5tfN_FJ1k8O0vpiG4DUKMv86RVfXS7UkjXc_hBYIshBM3.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQSB9u2Mx6D_lG5MeBT_9cHcsZHdUfmdDZVfqoKSzJn2DRpatHUTwAERt-JCd1Ik7EhS-wD08YQYEhl9hEgHxMpnNXw.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTfdlMs6MZePP-G-qVRlYCi0A0o6BALiv5wZEHDpuXQwX8O50EJitoi1tUK1s99gIDTzFlLsO5SKnSbCYGPIpvroBjE.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYx_Nt7tAvWeDYKP860ezlM7nc7Y3cb_gPQ3bOYtl2vP4HmjAT_ghBvUi3mBn-xLJyatOaQzLuuiQTXTCnVkcN2oCFI.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV2G3wuIEv5IUyvRN9bj5o6Ko9ry5xDi6sartKPi69z-zmsZisHuEo1JBRwrMCbhMzZe4H-wlNCia3S-_iZ4XG2dpVyGDZ2ioyk-q4fs8pB6Mv_7dj4eOeRTA0JI.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTAZIdVYHAFXUQNgREb9E4mhpWGb7B9VgJVz6aL-kPPIsRkDSIf7V-EOVhNmfdO-ZwEb034W9Bcf0MYspfKAFu8twqo.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTpCR8YGDediYhXcOIuU0xcSVxnsyvXv7LZztq4sB8QeN0IJLwz400Co4sjB_VhYoziLgjRUfBZC2RXR7KKdoeIcI7P2-P5M_wyOgUwMFBrVHHTNyntGPdh3Sreg.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb6cAa86ANxlwjYqn466drEd67aQwFtc1U96-i1YBirtxfvp_scS7P2D7YxYVck4PWPek1YZL0H9MB34v0actiqDnRQ.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbAJGyjtN3VkGy6a2beSc8L2CyeHN30fMbyeViVew8cVGmbJMPQojMt6zcrNjnKrTaziFlhTeQNcoDuwWRnMpBy0DvnIiQoLG07zdmUOeXA0jpC-fe8VK3QJBRGe.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBiiu3ZAjkVvEZlwgbgP-4ARgD7gWJ2io1bQZV5jUKYPlAmO5NHyXDOi8kk6sipREdbBSD94g_vhg3LqJ5tJKeq-c4.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcxCz2cwY9dt0vFCLrdE0u5mYuuTuwQJJ8jRUm8laA7RrrUF4yFIcWJ9udZhD_r2LrEfmMBABv0uJcCwwlQf48SnaDyufcRsAkczG2Djl5JS24BcLyEuDHMgOtwj.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTrnrKMn6JYfJMpDt1CLq2dYTO9Ar3meDsntxoPXysmEAsDoiYM_JWHm09PpnPCie2VRJlc5NF2LYLNbwRXpM9pHE_4.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXoAEU1Nl0jayXqBb3mu73c0IGeWdado34oQDPp5FCr1p7DKR-mdXEMIEXdPYi8IFAL0fhVMYpDYqECualwg3G0uC4I.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZoqRa1AdDFxos2o4cXahpSfIxCKVJpKAXd5Fkfp_7dkbuGK6sIijj6atvzjQjgTTJp-3IjeKvDlHQQOlJTS-BGliSIVo_X5xh8tq1gxIaNfW0Zz7Wr5SrbjkUdm.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5pgxpQRbYP4O2IP0zAPxKeHRGPl1LpzaWeUPwmhExNDJ1Cfnw-evBE_a3RzYmRvi8g1a2Zyh-xr5HurtWbQyo0JrU.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV_hNaUgikcW44d3xA0FrEr33WOXFbi7TartSVGO0BntxSk38CoBZK-LRqwixyAZSsG5PwSIuM0cLyL4bQH865yY4nA.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXXcg4RFlL5Z6-bblHZWzzncMaN7AyH3FOJh_Ipjd5neRKdPPz1KAEUmmrkNGLiZsSnR60lsseCHwIs_wTy8HgIRgPM.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTKcg2k1ptU52-S2TXxRcCdBGZjRC-JzojtVERR9__ks1KZxsyZ77s0m0EI8MA0C1R9eBiWHi2fappEpDvNwcMhjTyoOpeTBdSaMcN74eApSHFUGii-W_oRW60kTBcfwiK7P_If5H-OtZoY6iutXME8rpQqO9G0jNypUlUH77Zv8gUZqg0E80nY.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbRMjii2H9wM5c9iKQ35I5HkYrKaM42Kd1hec_zgQaVoqx9wuydVdRt3GSwb3teox0AEwbdVtD7wK2Emn5PwyJho5i3D8oZ_jz2LLuvlO3XpMjwYAsgYxL_fX61F.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABasHzyu4M682QffzUIIXdQilf756iRs2uFZ1beC6OFgYrGqw0o0FWhtrpa1dU5GKySAbFTPGshH_OPi07z-Qe5iej_u-zGVlobuSf4p555nGIfo04oDEA_9-CRso.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRa1NGER-jBTfPJXsv17W0DVqskLsUiSIMUNoLPDwpGAEOZwO8sOjAmd572JB7XZoPEzyhG22aFL01ejAEHkJ-ap_YoZywUB9sMx-QgeNMHw1c9Twl4-lgEvip3f.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTkLaJLrR7faXhHg_plP0nXDQ4L2Uy4QWERQL58jtuB2yp7l3AoXr41P6QY-XzvkS-lQpOqBqvq21jjipSZ6zHK8IRVKqf2bTJ61Lir5CXBI7Vi-Q3GD4PlAwaZz.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ-EfZ8Os6TyBLdivNd5MD3dPF-quosAU2c_Y1fcC6SZqdMJnFU5GRq6GuuB3Da25zuRSL42AjZH4kj0uF55jqTmdQ.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZxu8PhTTb-zQGCq0C_F-avXw6-NblvH28hTHCKghbv2DNoWwuPJeRfNvMVexon0UozyWf_zHww1mzC0INcQ5KH_hpo.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbCr0mPNnSrMvxFmbpD8o0MGX7pFRmr1AnWHVUlC7q9tjDBK-bnX8o0kQm8yRzqdcxA9LtrpKs5FXH5WEdCHMBbjBnifXeuGvGmbz8SIORSkT6j6ZObN_-uEqddr.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbrnfR6fvRRG8bGYQrKVvlVcBTmWeM3PbqIN8i_WnJecK-J7zeYjJLL_ORf0ASH8lQEVPk8cfpvhdaZlF5Z5rP4XJFLmJYqhHGYbUJhZIbsLpYq4OTvNzswyg2C8.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQTbF2WfWx1OIbxc6TQKPkNqybFIocd-5GRQNs6m_hSaULqbL6fMm7NzsE-NFZKlA5WMq7yL2idALLwgj3PUDU-blr9kwYDpf_fKSBXCBxpPsbQnkJihowI5EtK8.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWGlXS_l5p5vIl3pYVuyysoy6Lf1DAvmS1pp2vAaRm7MN6olo1Gb2GSwwd9PaWfFhXFaMcseB8YXcNxQ5ocwmJrxkHp1HdxeYdxhVOBliDt3VY42vtBtT2NuH-cz.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkG1uRRW8oHOhODXBPUJRzVyoNhRZlx8ZNhh50u-GRH7J8hoEYk_0NrciQO2w0nMyclOPkpJx59p2Hx_5F62x0IEBw.webp",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZdRLDSTTAtXLlv2B-hn7WWOH1u3y9X4uicVQH3BiCFgYN5pVs1HdvABfy1kauJr7GIxD2wD68Z5VxDW5wg2r3eBJkFlku5hiO7B2nfiushJcCEggf9vcJRxPoJX.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSZD0yxtchWVO29xyfKEZ5sD0cw5XT5y2eUKqZ_LCn3I2fOGwXoReyw-GyHQsHlI5RVc_GLn3-YtyMbfb0yiFnKmDUaX5KqB7Z_95skH-T6jKkG_1-MP7pMfKabZ.jpg",
    "https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYMnZkE5W64jUe3hVJI1BrLZuL0zRTxXq-ODmtWSwwh52Bcxz3k2kbwWUCnfkoK_bayV9gfLlpxlJ2OtpqM4xME0XeODCfFLtOdUVYzX6mBac-POZRw2PsU3mU-d.jpg"]

while (i < urls.length) {
    let img = document.createElement("img")
    let extension = urls[i].split('.').pop();
    img.src = urls[i];

    if (extension == 'webp') {
        img.setAttribute("type", "image/webp")
    } else {
        img.setAttribute("type", "image/jpg")
    }

    console.log(i + 1)

    elemn1.appendChild(img)

    i = i + 1
}

