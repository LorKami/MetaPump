import React from 'react'
import '../Monitor/Monitor.css'

import LogoManta from '../../images/presale.png'
import MantaLogo from '../../images/manta.png'

const Monitor = () => {
  return (
    <div>

      <div className='Monitor'>

        <div className='Logo'>
          <img src={LogoManta} />
        </div>

        <div className='SocialBtn'>
          <a href='https://t.me/MantaPumpOfficial' target='_blank'>Telegram</a>
          <a href='https://twitter.com/MantalPump' target='_blank'>Twitter</a>
          <a>Tokenomics</a>
          <a href='https://mantaswap.finance/#/swap' target='_blank'>Buy</a>
          <a href='https://dexscreener.com/manta' target='_blank'>Chart</a>
        </div>

        <div className='MantaInformation'>

          <div className='MantaInfoTitle'>
            <h2>Welcome to MantaPump!</h2>
          </div>

          <div className='MantaInfoBox'>

            <div className='MantaInfoText'>
              <p>Prepare for an exciting journey with Manta Pump, the hottest new token on Manta! 🔥</p>
              <p>🔒 Instant Renounce: Full transparency and security. ( Burning process ) ✨</p>
              <p>🔒 Liquidity Burn: Instantly Burned after launch to provide a stable foundation for Manta Pump's ascent to the top. 💎</p>
              <p>🚀 Launching on LeetSwap: Manta Pump will make its debut on LeetSwap for maximum exposure!</p>
              <p>💰 Initial Liquidity: MantaPump's initial liquidity will be 0.5 ETH.</p>
            </div>

            <div className='MantaInfoImage'>
              <img src={MantaLogo} />
            </div>

          </div>

        </div>

        <div className='Tokenomics'>

          <div className='TitleToke'>
            <h2>Tokenomics</h2>
          </div>

          <div className='TokeBoxes'>

            <div className='TokeInfo'>
              <p>10M Supply</p>
              <p>Max tx 0.5%</p>
              <p>Max wallet 2%</p>
              <p>1% LP</p>
              <p>1% Marketing</p>
            </div>

            <div className='TokeBtn'>
              <div className='TokeBtnUp'>
                <a href='https://pacific-explorer.manta.network/address/0x648FF8b511274F7f6f94fbF68974cca93771d2A5' target='_blank'>Contract</a>
                <a href='#' target='_blank'>Buy</a>
              </div>

              <div className='TokeBtnDown'>
                <a href='#' target='_blank'>Renounced</a>
                <a href='#' target='_blank'>LP burn</a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Monitor