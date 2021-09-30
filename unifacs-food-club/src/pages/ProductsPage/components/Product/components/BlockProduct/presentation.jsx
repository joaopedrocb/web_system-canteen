// dependencies
import React from "react";

// css
import "./styles.css";

// enums
import { AccessLevelEnum } from "../../../../../../common/domain";

// external components
import { CloseButton } from "../../../../../../components";

function BlockProductPresentation(props) {
  const { accessLevel, setBlockProductModalIsActive, isBlocked } = props;

  function renderBlockProductData() {
    if (accessLevel.id === AccessLevelEnum.STAFF.id) {
      return (
        <div>
          <span>
            Deseja
            {isBlocked ? " desbloquear " : " bloquear "}o produto para toda a
            cantina?
          </span>

          <div className="block-product-footer">
            <button>Voltar</button>
            <button>Confirmar</button>
          </div>
        </div>
      );
    }

    return (
      <>
        <form className="block-product-form">
          <label>Selecione o(s) aluno(s):</label>
          <input
            name="students"
            id="students-id"
            list="studentsList"
          />

          <button
            className="confirm-block-button"
            onClick={() => setBlockProductModalIsActive(false)}
          >
            Bloquear
          </button>
        </form>

        <datalist id="studentsList">
          <option>José Pedro</option>
          <option>João Paulo</option>
          <option>Julio Cesar</option>
          <option>Maria Valentina</option>
          <option>Roberto</option>
        </datalist>
      </>
    );
  }

  return (
    <div className="block-product-content">
      <div className="close-button-container">
        <CloseButton onClick={() => setBlockProductModalIsActive(false)} />
      </div>

      <span class="update-product-page_section-title">
        {isBlocked ? " Bloquear " : " Desbloquar "} produto
      </span>

      {renderBlockProductData()}
    </div>
  );
}

export default BlockProductPresentation;
