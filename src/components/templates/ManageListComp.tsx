"use client";
import CustomBadge from "@/components/atoms/CustomBadge";
import { POPULER_CITIES, REACT_QUERY, STRING_DATA } from "@/shared/Constants";

import React, { useState } from "react";
import CreateFavList from "../ modals/CreateFavList";
import useModal from "@/hooks/useModal";
import ActionButton from "../atoms/ActionButton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteFavoriteList, fetchFavoriteList } from "@/server/actions/favouriteList";
import { IFavouriteList } from "@/types";
import FavouriteListProperty from "./FavouriteListProperty";
import ConfirmationModal from "../ modals/ConfirmationModal";
import EditFavList from "../ modals/EditFavList";
import { handleOnSettled } from "@/shared/Utilies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";

const ManageListComp = () => {
  const queryClient = useQueryClient();
  const [activeBadgeData, setActiveBadgeData] = useState<IFavouriteList>();
  const [selectedBadge, setSelectedBadge] = useState<any>();
    const { showModal, openModal, hideModal } = useModal();
    const {
      showModal: showModalDelete,
      openModal: openModalDelete,
      hideModal: hideModalDelete,
    } = useModal();

    const {
      showModal: showModalEdit,
      openModal: openModalEdit,
      hideModal: hideModalEdit,
    } = useModal();
  const {
    data: favouriteListData,
    isLoading: isLoadingFavourite,
    fetchStatus,
  } = useQuery({
    queryKey: [REACT_QUERY.FAVOURITE_LIST],
    queryFn: async () => {
      const res = (await fetchFavoriteList()) as unknown as IFavouriteList[];
      setActiveBadgeData(res?.[0]);
      return res ?? [];
    },
  });

  const { isLoading: isLoadingDelete, refetch } = useQuery({
    queryKey: [REACT_QUERY.FAVOURITE_LIST, selectedBadge?.id],
    queryFn: async () => {
      const res = (await deleteFavoriteList({
        id: selectedBadge?.id,
      })) as unknown as IFavouriteList[];
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY.FAVOURITE_LIST],
      });
      closeDeleteModal();
      return res ?? [];
    },
    enabled: false,
  });

  // Mutations
  const { mutate, isPending } = useMutation({
    mutationFn: deleteFavoriteList,
    onSettled: async (data) => {
      console.log(data);
      hideModalDelete();
      const response = {
        data,
        success: () => {
          queryClient.invalidateQueries({
            queryKey: [REACT_QUERY.FAVOURITE_LIST],
          });
        },
        fail: (error: any) => {
          const { message } = error;
          // setRespError(message);
        },
      };
      handleOnSettled(response);
    },
  });



  const handleBadgeClick = (data: any) => {
    console.log(data);
    setActiveBadgeData(data);
  };

  const closeDeleteModal = () => {
    setSelectedBadge("");
    hideModalDelete();
  };

  const handleSettingClick = (data: IFavouriteList) => {
    setSelectedBadge(data);
    showModalEdit();
  };

  const handleDeleteAction = () => {
    // refetch();

    mutate({ id: activeBadgeData?.id ?? '' });
  };

  const renderData = () => {
    if (isLoadingFavourite) {
      return <div className="text-center">Loading ...</div>;
    }

    if (favouriteListData?.length === 0) {
      return <div className="text-center">{STRING_DATA.NO_DATA_FOUND_LIST}</div>;
    }
    return (
      <>
        <div className="flex gap-4 min-w-full overflow-x-scroll">
          {favouriteListData?.map((item, index) => (
            <CustomBadge
              key={index}
              item={{ label: item?.name, ...item }}
              activeBadge={activeBadgeData}
              onclick={handleBadgeClick}
              onclickSetting={handleSettingClick}
              showSettingIcon={true}
            />
          ))}
        </div>
        <hr className="border-[0.25px] border-zinc-400" />
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="custom-h2-class">{activeBadgeData?.name}</div>
          <div className="flex items-center justify-end gap-4">
            <ActionButton
              text="Edit"
              onclick={showModalEdit}
              icon={<FontAwesomeIcon icon={faPencil} />}
            />
            <ActionButton
              text="Delete"
              onclick={showModalDelete}
              icon={<FontAwesomeIcon icon={faTrash} />}
              isDeleteButton={true}
            />
          </div>
        </div>
        {activeBadgeData ? (
          <FavouriteListProperty listId={activeBadgeData?.id ?? ""} />
        ) : null}
      </>
    );
  };

  return (
    <>
      {/* Create List Modal */}
      <CreateFavList openModal={openModal} hideModal={hideModal} />

      {/* Create List Modal */}
      <EditFavList
        fieldata={selectedBadge}
        openModal={openModalEdit}
        hideModal={hideModalEdit}
        deleteLoading={isPending}
        deleteAction={handleDeleteAction}
      />

      {/* Delete */}
      <ConfirmationModal
        message={STRING_DATA.MESSAGE_PROCEED}
        openModal={openModalDelete}
        actionLabel={STRING_DATA.REMOVE}
        hideModal={closeDeleteModal}
        onActionClick={handleDeleteAction}
        loading={isPending}
      />

      <div className="common-list-section-class my-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            <div className="custom-h2-class">{STRING_DATA.YOUR_LIST}</div>
            <ActionButton
              text="Add list"
              onclick={showModal}
              icon={<FontAwesomeIcon icon={faPlus} />}
            />
          </div>
          {renderData()}
        </div>
      </div>
    </>
  );
};

export default ManageListComp;
