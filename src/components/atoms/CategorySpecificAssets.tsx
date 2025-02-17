"use client";
import { fetchAssetTypes } from "@/server/actions/assetTypes";
import { fetchTopAssetsTypeClient } from "@/services/assetsType";
import { FILTER_EMPTY, REACT_QUERY, STRING_DATA } from "@/shared/Constants";
import { ROUTE_CONSTANTS } from "@/shared/Routes";
import { IAssetType } from "@/types";
import { useFilterStore } from "@/zustandStore/filters";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const CategorySpecificAssets = (props: { isBankCategoriesRoute?: boolean }) => {
  const { isBankCategoriesRoute = false } = props;
  const { setFilter } = useFilterStore();
  const params = useParams() as {
    slug: string;
    slugasset: string;
    slugcategory: string;
    slugbank: string;
  };

  const { data: assetsTypeData, fetchStatus } = useQuery({
    queryKey: [REACT_QUERY.CATEGORY_ASSETS_TYPE],
    queryFn: async () => {
      const response = (await fetchAssetTypes()) as unknown as IAssetType[];
      const result =
        response?.filter((item: any) => {
          const categoryName = item?.category?.data?.attributes?.slug || "";

          if (categoryName === params?.slugcategory) {
            return item;
          }
        }) ?? [];
      console.log("INFO:: (result)", { result, response });
      return result;
    },
  });

  const handleLinkClick = (propertyType: IAssetType) => {
    setFilter({
      ...FILTER_EMPTY,
      propertyType: {
        ...propertyType,
        label: propertyType?.name,
        value: propertyType?.id,
      } as any,
    });
  };

  const renderLink = (item: IAssetType) => {
    const URL = `${ROUTE_CONSTANTS.BANKS}/${
      params.slug
    }/${STRING_DATA.TYPES?.toLowerCase()}/${item?.slug}`;
    // console.log("INFO:: (URL)", { URL, params });
    if (isBankCategoriesRoute) {
      return (
        <Link href={URL} onClick={() => handleLinkClick(item)}>
          {item?.name}
        </Link>
      );
    }
  };

  if (fetchStatus === "fetching") {
    return (
      <div className="flex flex-col my-4">
        <div className="custom-common-header-class min-h-12 flex items-center justify-start">
          <div className="skeleton h-4 w-32 "></div>
        </div>
        {Array.from({ length: 5 }, (_, index) => (
          <div className="custom-common-header-detail-class" key={index}>
            <div className="flex flex-col gap-4 p-4  w-full min-h-12">
              <h2 className="line-clamp-1">
                <div className="skeleton h-4 w-32 "></div>
              </h2>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const renderer = () => {
    if (assetsTypeData?.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          No data found
        </div>
      );
    }
    return (
      <>
        {assetsTypeData?.map((item, index) => {
          return (
            <div className="custom-common-header-detail-class" key={index}>
              <div className="flex flex-col gap-4 p-4  w-full min-h-12">
                <h2 className="line-clamp-1">{renderLink(item)}</h2>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="custom-common-header-class">{STRING_DATA.TOP_ASSETS}</div>
      {renderer()}
    </>
  );
};

export default CategorySpecificAssets;
