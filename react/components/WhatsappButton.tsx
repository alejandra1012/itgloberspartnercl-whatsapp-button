import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  height: number
  width: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  // eslint-disable-next-line no-console
  console.log('Mi mensaje formateado es correcto', formattedMessage, logo)

  return (
    <div className="fixed bottom-2 right-2  flex flexColumn z-max">
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blanck"
      >
        <img src={logo} width={width} height={height} alt="Logo de WhatsApp" />
      </a>
    </div>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3212018212',
  message: 'Estas comunicandote con Alejandra',
  width: 80,
  height: 80,
}

WhatsappButton.schema = {
  title: 'Boton de WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de WhatsApp que se relaciona con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Telefono',
      description: 'Agrega por favor el numero de telefono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje que sera para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    height: {
      title: 'Telefono',
      description: 'Agrega por favor el numero de telefono',
      type: 'string',
    },
    width: {
      title: 'Telefono',
      description: 'Agrega por favor el numero de telefono',
      type: 'string',
    },
  },
}
export default WhatsappButton
