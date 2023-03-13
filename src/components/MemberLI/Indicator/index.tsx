type Props = { name: string, qty: number | string, adminEditable?: boolean, displayNonePx?: number, updateStep?: number };

const Indicator = ({ name, qty, adminEditable = false, displayNonePx = 615, updateStep = 1 }: Props) => {
  const canEdit: boolean = adminEditable;
  // const canEdit = adminEditable && admin;
  const canEditClass: string = canEdit ? 'px-4' : 'mx-2';
  const dataSetName: string = name.toLowerCase().replace(' ', '_');
  const formattedName: string = `${name}${adminEditable ? '*' : ''}:`;
  return (
    <div className={`fs-7 text-center mx-2 d-none-${displayNonePx}`}>
      <span className="d-block text-capitalize secondary-color fw-bold fs-7">
        { formattedName }
      </span>
      <div className={`rounded indicator fw-bolder position-relative ${canEditClass}`} data-step={ updateStep }>
        {canEdit &&
          <button className="update-indicator-btn minus" data-name={ dataSetName }>
            <i className="fa-solid fa-minus">
              <span className="sr-only">
                update minus { updateStep }
              </span>
            </i>
          </button>
        }
        <span className={`indicator-name-${dataSetName}`}>{ qty }</span>
        {canEdit &&
          <button className="update-indicator-btn plus" data-name={ dataSetName }>
            <i className="fa-solid fa-plus">
              <span className="sr-only">
                update plus { updateStep }
              </span>
            </i>
          </button>
        }
      </div>
    </div>
  );
};

export default Indicator;
