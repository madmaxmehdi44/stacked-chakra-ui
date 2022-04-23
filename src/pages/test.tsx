import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { FlexSpinner } from "../components/app/FlexSpinner";
import { Logo } from "../components/Logo";
import { inferSSRProps } from "../utils/inferSSRProps";
import { trpc } from "../utils/trpc";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  const { data, isLoading, error } = trpc.useQuery(["hellomessage"]);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc quoque iucunditatem, si vis, transfer in animum;
        Non igitur bene. Immo videri fortasse.{" "}
      </p>

      <p>
        At multis se probavit. Quonam, inquit, modo? Verba tu fingas et ea dicas, quae non sentias? Confecta res esset.
        Contemnit enim disserendi elegantiam, confuse loquitur. Duo Reges: constructio interrete.{" "}
      </p>

      <p>
        Apparet statim, quae sint officia, quae actiones. Sin aliud quid voles, postea. Quid Zeno? Collatio igitur ista
        te nihil iuvat.{" "}
      </p>

      <p>
        Deprehensus omnem poenam contemnet. Scaevolam M. Negare non possum. Itaque hic ipse iam pridem est reiectus;
        Sullae consulatum? Nonne igitur tibi videntur, inquit, mala? Quo modo autem philosophus loquitur?{" "}
      </p>

      <p>
        At hoc in eo M. Utilitatis causa amicitia est quaesita. Apparet statim, quae sint officia, quae actiones.
        Rationis enim perfectio est virtus; Idem iste, inquam, de voluptate quid sentit? Quae diligentissime contra
        Aristonem dicuntur a Chryippo.{" "}
      </p>

      <p>
        Quae cum dixisset, finem ille. Ut optime, secundum naturam affectum esse possit. Poterat autem inpune; Contemnit
        enim disserendi elegantiam, confuse loquitur.{" "}
      </p>

      <p>
        De quibus cupio scire quid sentias. Sed tu istuc dixti bene Latine, parum plane. Quod ea non occurrentia
        fingunt, vincunt Aristonem; Cur id non ita fit?{" "}
      </p>

      <p>
        Minime vero, inquit ille, consentit. Quae duo sunt, unum facit. Quae est igitur causa istarum angustiarum? Quam
        ob rem tandem, inquit, non satisfacit? Si longus, levis dictata sunt. Videamus animi partes, quarum est
        conspectus illustrior; Collige omnia, quae soletis: Praesidium amicorum. Ita multa dicunt, quae vix intellegam.{" "}
      </p>

      <p>
        Non est ista, inquam, Piso, magna dissensio. A mene tu? Ut id aliis narrare gestiant? Tanta vis admonitionis
        inest in locis; In schola desinis. Quid, quod res alia tota est?{" "}
      </p>

      <p>
        Optime, inquam. Quamquam tu hanc copiosiorem etiam soles dicere. Beatus sibi videtur esse moriens. Frater et T.{" "}
      </p>
    </>
  );
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: {} };
};

export default Index;
