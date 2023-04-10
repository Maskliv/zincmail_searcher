import { createStore } from "vuex";

export interface Email {
  id: number;
  Date: Date;
  From: string;
  To: string[];
  Subject: string;
  Body: string;
  isSelected: boolean;
}

export interface State {
  emailsList: Email[];
}

//export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    emailsList: [
      {
        id: 1,
        Date: new Date(),
        Subject: "Invitación al evento de tecnología",
        From: "eventos@example.com",
        To: ["usuario@example.com"],
        Body: "Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí! Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!",
        isSelected: false,
      },
      {
        id: 2,
        Date: new Date(),
        Subject: "Confirmación de subscripción al boletín",
        From: "newsletter@example.com",
        To: ["usuario@example.com"],
        Body: "¡Gracias por suscribirte a nuestro boletín! A partir de ahora recibirás actualizaciones periódicas sobre nuestras últimas noticias y promociones.",
        isSelected: false,
      },
      {
        id: 3,
        Date: new Date(),
        Subject: "Recordatorio de pago",
        From: "pagos@example.com",
        To: ["usuario@example.com", "usuario2@example.com"],
        Body: "Este es un recordatorio amistoso de que tu próximo pago está programado para el 28 de marzo.\n\nAsegúrate de tener fondos suficientes en tu cuenta para evitar cargos adicionales.",
        isSelected: true,
      },
      {
        id: 4,
        Date: new Date(),
        Subject: "Terminación de contrato",
        From: "jefe@example.com",
        To: ["usuario@example.com"],
        Body: "Le recuerdo amablemente que se largue de esta hp empresa",
        isSelected: false,
      },
      {
        id: 5,
        Date: new Date(),
        Subject: "Elaboración de Renuncia",
        From: "resursoshumanos@example.com",
        To: ["usuario@example.com"],
        Body: "Por favor diligencie su carta de renuncia lo más pronto posible",
        isSelected: false,
      },
      {
        id: 6,
        Date: new Date(),
        Subject: "Cumplimiento con las expectativas",
        From: "eventos@example.com",
        To: ["usuario@example.com"],
        Body: "Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!",
        isSelected: false,
      },
      {
        id: 7,
        Date: new Date(),
        Subject: "Resumen de Estancia diaria",
        From: "eventos@example.com",
        To: ["usuario@example.com"],
        Body: "Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!",
        isSelected: false,
      },
      {
        id: 8,
        Date: new Date(),
        Subject: "Liberación de Renta",
        From: "eventos@example.com",
        To: ["usuario@example.com"],
        Body: "Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!",
        isSelected: false,
      },
      {
        id: 9,
        Date: new Date(),
        Subject: "Vuelo de trabajo",
        From: "eventos@example.com",
        To: ["usuario@example.com"],
        Body: "Estimado usuario, nos complace invitarte al evento de tecnología que se llevará a cabo el próximo mes. ¡Esperamos verte allí!",
        isSelected: false,
      },
    ],
  },
  mutations: {
    updateEmailsList(state, emailsListUpdated: Email[]) {
      state.emailsList = emailsListUpdated;
    },
    selectEmail(state, selectedEmail: Email) {
      state.emailsList.forEach((email) => {
        if (email === selectedEmail) {
          email.isSelected = true;
        } else {
          email.isSelected = false;
        }
      });
    },
  },
  actions: {
    updateEmailsList({ commit }, emailsListUpdated) {
      commit("updateEmailsList", emailsListUpdated);
    },
    selectEmail({ commit }, selectedEmail: Email) {
      commit("selectEmail", selectedEmail);
    },
  },
  getters: {
    emailsList: (state) => state.emailsList,
  },
});
